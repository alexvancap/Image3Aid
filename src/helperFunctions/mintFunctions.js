import { ethers, utils } from 'ethers'

const contractABI = require("../contract-abi.json");
const CONTRACT_ADDRESS = "0xf935f8C6F0fB06e96F0a720e5b1AA9d005C82A41";


export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      const network = await ethers.providers.getNetwork("rinkeby")
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
        success: true,
      };
      console.log('haaaaaah', network)
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

export const askContractToMintNft = async (amount, fullSet=false) => {
  try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner()
      const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer)

      // STEP1: read price from contract don't hardcode it
      const price = await connectedContract.price();
      const priceInEth = utils.formatEther(price.toString(), "ether");
      if(fullSet){
        return connectedContract.mintFullSet();
      } else {
        return connectedContract.mint(amount);
      }

      // TODO numberOfNftsToMint this is static now, might need to make it dynamic?
      const numberOfNftsToMint = 1;
      const tnx  = await connectedContract.mint(numberOfNftsToMint, {
        // Value is basically how much eth will be needed to mint numberOfNftsToMint
        value: utils.parseEther(
          (priceInEth * numberOfNftsToMint).toString()
        ),
      });
      console.log('tnx', tnx);
      // console.log("Going to pop wallet now to pay gas...")

      // console.log("Mining... please wait")
      // await nftTxn.wait()
      // console.log(nftTxn)
      // console.log(`Mined, tee transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`)
    } else {
      console.log("Ethereum object doesn't exist")
    }
  } catch (error) {
    console.log(error)
  }
}

export const askContractToMintAll = async (amount) => {
  const { ethereum } = window;


  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner()
  const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer)

  console.log('haaaaaaahaaaa', connectedContract.mintFullSet(amount));


}


