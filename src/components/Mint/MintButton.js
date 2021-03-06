import React, { useState } from 'react';
import styled from 'styled-components';
// import { connectWallet, getCurrentWalletConnected, mintNFT } from '../../helperFunctions';
import { connectWallet, askContractToMintNft } from '../../helperFunctions';


import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@mui/material/Alert';

import { Text } from './../../framework';

const MainButton = styled.div`
  border-radius: 20px;
  background-color: ${props => props.color || '#FFDD00'};
  color: ${props => props.textColor || 'black'};
  padding: 15px 35px 15px 35px;
  margin-top: 10px;
  text-align: center;

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

// const MintHeader = styled(H2)`
//   text-align: center;
// `;

const ConnectWalletButton = styled(Button)`
  && {
    margin-top: 20px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;

const AmountInput = styled(TextField)`
  && {
  margin-top: -10px;
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

const numberStyle = {
  // width: '50%'
}

const ButtonWrapper = styled.div`
  flex-direction: column;
`;

const MintButtonsWrapper = styled.div`

`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
/* width: 30%; */
  margin: 0 auto;
`;

const OrText = styled(Text)`
  text-align: center;
  margin-top: 20px;
`

const PriceText = styled(Text)`
  text-align: center;
  margin-top: 10px;
`

const StepLabel = styled(Text)`
  text-align: center;
  font-weight: 500;
`;

const MintButton = () => {
  const [walletAdress, setWallet] = useState(null);
  const [modalIsOpen, setModalOpen] = useState(false);
  const [amount, setNewAmount] = useState('1');
  const [ errorMessage, setErrorMessage] = useState('');
  const [ successMessage, setSuccessMessage ] = useState('');

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet()
    setWallet(walletResponse.address)
  };

  const toggleModal = () => setModalOpen(!modalIsOpen);

  const onMintPressed = async () => {
     const contractRes = await askContractToMintNft(amount);
     if(contractRes.error) setErrorMessage(contractRes.error);
     else {
       setErrorMessage('');
       setSuccessMessage(contractRes.success);
     }
  }

  const onFullSetPressed = async () => {
    const contractRes = await askContractToMintNft(amount, true);
    if(contractRes.error) setErrorMessage(contractRes.error);
    else {
      setErrorMessage('');
      setSuccessMessage(contractRes.success)
    }
  }
  
  const handleAmountChange = (newAmount) => setNewAmount(newAmount.target.value)
  

  const goToOpensea = () =>  window.open('https://opensea.io/collection/imag3aid', '_blank');

  return (
    <>
      <ButtonWrapper>
        <MainButton 
          onClick={toggleModal} 
          textColor="white" color="#0057B7"
          disabled={walletAdress}
        >
          Press here to mint!
        </MainButton>
        <MainButton 
          onClick={goToOpensea}
        >
          Opensea
        </MainButton>
      </ButtonWrapper>

      <Modal
        open={modalIsOpen}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <ModalOuter>
        <Box sx={modalCont}>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        {successMessage && <Alert severity="success">{successMessage}</Alert>}

          <StepLabel>Step 1</StepLabel>
        
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
          <StepLabel style={{marginTop: 20}}>Step 2</StepLabel>

         <InputWrapper>
          <AmountInput label="Amount" placeholder='type amount here...' helperText="How many nfts do you want to mint?" sx={numberStyle} onChange={handleAmountChange} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
         </InputWrapper>

         <StepLabel style={{marginTop: 20}}>Step 3</StepLabel>

         <MintButtonsWrapper>
          <ConnectWalletButton 
              variant="outlined" 
              onClick={onMintPressed}
            >
              mint
            </ConnectWalletButton>
          <PriceText>0.05eth / image</PriceText> 

            <OrText>OR</OrText>
            <ConnectWalletButton 
              variant="outlined" 
              onClick={onFullSetPressed}
            >
              mint full set (whitelist only)
            </ConnectWalletButton>
         </MintButtonsWrapper>
          <PriceText>2.85 ETH required for full set</PriceText> 
        </Box>
      </ModalOuter>
      
    </Modal>
    </>
  )
};

export default MintButton