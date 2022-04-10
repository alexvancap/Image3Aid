import { ethers, utils } from 'ethers'

const contractABI = require("../contract-abi.json");
const CONTRACT_ADDRESS = "0xf935f8C6F0fB06e96F0a720e5b1AA9d005C82A41";


export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
        success: true,
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" rel="noreferrer" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
       success: false,
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      })
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Write a message in the text-field above.",
        }
      } else {
        return {
          address: "",
          status: "🦊 Connect to MetaMask using the top right button.",
        }
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      }
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊 <a target="_blank" rel="noreferrer" href={`https://metamask.io/download.html`}>
              You must install MetaMask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    }
  }
}

// export const askContractToMintAll = async (amount) => {
//   console.log('huuuuuh')

//   const { ethereum } = window;


//   const provider = new ethers.providers.Web3Provider(ethereum);
//   const signer = provider.getSigner()

//   const connectedContract = await new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer)

//   const price = await connectedContract.price();
//   const priceInEth = utils.formatEther(price.toString(), "ether");


//   console.log('haaaaaaahaaaa', await connectedContract.mintFullSet({
//     // Value is basically how much eth will be needed to mint numberOfNftsToMint
//     value: utils.parseEther(
//       (priceInEth * 57).toString()
//     ),
//   }))

// }

export const askContractToMintNft = async (amount, fullSet=false) => {
  try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer)

      const price = await connectedContract.price();
      const priceInEth = utils.formatEther(price.toString(), "ether");

      const calculatePrice = amountOfItems => {
        return utils.parseEther(
          (priceInEth * amountOfItems).toString()
        )
      } 

      if(fullSet){
        await connectedContract.mintFullSet({value: calculatePrice(57)})
        return { success: `You successfully minted all nft\`s`}
      } else {
        const tnx = await connectedContract.mint(amount, {
          // Value is basically how much eth will be needed to mint numberOfNftsToMint
          value: calculatePrice(amount || 1)
        });
        return {success: `minting ${amount} contracts: `, tnx};
      }
    } else {
      return {error: "Metamask not installed."};
    }
  } catch (error) {
    console.log('errroooor', error)
    if(error.code === 'INSUFFICIENT_FUNDS'){
      return {error: "Insufficient funds in wallet"}
    }
    return {error: error.message}
  }
}




