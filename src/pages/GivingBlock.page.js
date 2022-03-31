import React from 'react';
import styled from 'styled-components';

import { H1, H2, SocialButton } from '../framework';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Faq from './../components/Faq'

const Container = styled.div`
  min-height: ${props => props.height + 80}px;//+80 for infolines
  width: 100%;
`;

const InfoLine = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 100%;
  line-height: 40px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${props => props.color || 'aliceblue'};
  font-weight: bold;
  width: ${props => props.width || '100%'};
  background-color: ${props => props.backgroundColor || 'default'};
  overflow: hidden;
`;

const LinkInText = styled.div`
  text-decoration: underline;
`;

const PageContentCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: ${props => props.height}px;
  margin: 0 auto;
  /* margin: 50px auto 50px auto; */

`;

const FlexCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const GivingBlockWrapper = styled.div`
  min-height: ${props => props.height}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const GivingBlockShouout = styled(H2)`
  text-align: center;
  margin-top: 10px;
`;

const GivingBlockLogo = styled.img`
  object-fit: cover;
  height: 100px;

  &:hover{
    cursor: pointer;
    opacity: 0.7;
  }
`;

const LetsDoThis = styled(H1)`
  font-size: 50px;
  margin: 30px 0 30px 0;
  text-align: center;
`;

const SocialCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const goToGivingBlock = () => {
  window.open( 
    "https://thegivingblock.com/campaigns/ukraine-emergency-response-fund/", "_blank"
  );
}

const GivingBlockPage = () => {
  const { height: windowHeight } = useWindowDimensions();
  return (
    <Container height={windowHeight}>
      <InfoLine backgroundColor='#0057B7'>
        100% of proceedes donated to Humanitarian Aid
      </InfoLine>
      <InfoLine width='100%' backgroundColor='#FFDD00' color="black">
        See &nbsp;<LinkInText>{` all projects `}</LinkInText>&nbsp; receiving aid through the distributed fund
      </InfoLine>
      <PageContentCont variant='outlined' height={windowHeight}>
        <FlexCont height={windowHeight / 2}>
          <Faq />
          <GivingBlockWrapper height={windowHeight / 2}>
            <GivingBlockLogo onClick={goToGivingBlock} src='/logos/TGBLogo.png' alt='Giving block logo'/>
            <GivingBlockShouout>On-chain Donation made possible by The Giving Block</GivingBlockShouout>
            <SocialCont>
              <LetsDoThis>Lets do this!</LetsDoThis>
              <SocialButton style={{width: '75px'}} color='#0057B7'>Twitter</SocialButton>
              <SocialButton style={{width: '75px', marginTop: 20}} color='#FFDD00' textColor='black' >Discord</SocialButton>
            </SocialCont>
          </GivingBlockWrapper>
        </FlexCont>

        
      </PageContentCont>
    </Container>
  )
};

export default GivingBlockPage;