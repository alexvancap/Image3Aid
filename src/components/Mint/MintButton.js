import React, { useState } from 'react';
import styled from 'styled-components';
// import { connectWallet, getCurrentWalletConnected, mintNFT } from '../../helperFunctions';
import { connectWallet, askContractToMintNft } from '../../helperFunctions';


import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { H2 } from './../../framework';

const MainButton = styled.div`
  border-radius: 20px;
  background-color: #FFDD00;
  color: black;
  padding: 15px 35px 15px 35px;

  font-size: 14px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    
  }
`;

const ModalOuter = styled.div`
  position: 'absolute';
  top: '50%';
  left: '50%';
  transform: 'translate(-50%; -50%)';
  width: 400;
  background-color: 'red';
  border: '2px solid #000';
  box-shadow: 24;
`;

const MintHeader = styled(H2)`
  text-align: center;
`;

const ConnectWalletButton = styled(Button)`
  && {
    margin-top: 20px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;

const modalCont = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


const MintButton = () => {
  const [walletAdress, setWallet] = useState(null);
  const [modalIsOpen, setModalOpen] = useState(false);
  // const [status, setStatus] = useState('');

  // const getCurrentWallet = async () => {
  //   const { address, status } = await getCurrentWalletConnected();
  //   setWallet(address);
  //   setStatus(status);
  //   console.log('adresss', address);
  // }

  // useEffect(() => {
  //   getCurrentWallet();
  //   addWalletListener();
  // }, [])

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet()
    // setStatus(walletResponse.status)
    setWallet(walletResponse.address)
  }

  // const addWalletListener = () => {
  //   if (window.ethereum) {
  //     window.ethereum.on("accountsChanged", (accounts) => {
  //       if (accounts.length > 0) {
  //         setWallet(accounts[0])
  //         setStatus("👆🏽 Write a message in the text-field above.")
  //       } else {
  //         setWallet("")
  //         setStatus("🦊 Connect to MetaMask using the top right button.")
  //       }
  //     })
  //   } else {
  //     setStatus(
  //       <p>
  //         {" "}
  //         🦊 <a target="_blank" rel="noreferrer" href={`https://metamask.io/download.html`} rel='noreferrer'>
  //           You must install MetaMask, a virtual Ethereum wallet, in your browser.
  //         </a>
  //       </p>
  //     )
  //   }
  // }

  const toggleModal = () => setModalOpen(!modalIsOpen);

  const onMintPressed = async () => {
     await askContractToMintNft();
  }


  return (
    <>
      <MainButton onClick={toggleModal}>Press here to mint!</MainButton>
      <Modal
        open={modalIsOpen}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <ModalOuter>
        <Box sx={modalCont}>
          <MintHeader>MINT</MintHeader>
          <ConnectWalletButton 
            variant="outlined" 
            onClick={connectWalletPressed}
          >
            {
              walletAdress 
                ? 'adress: ' + walletAdress 
                : 'Connect wallet'
            }
          </ConnectWalletButton>
          <ConnectWalletButton 
            variant="outlined" 
            onClick={onMintPressed}
          >
            mint
          </ConnectWalletButton>
          {/* <ConnectWalletButton 
            variant="outlined" 
            onClick={handleAskContract}
          >
   askMint
          </ConnectWalletButton> */}
        </Box>
      </ModalOuter>
      
    </Modal>
    </>
  )
};

export default MintButton