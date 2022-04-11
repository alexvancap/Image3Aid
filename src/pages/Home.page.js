import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import useWindowDimensions from '../hooks/useWindowDimensions';
import { useCountdown } from "rooks";

import { H1, H2, H3, Text, SocialButton } from '../framework';
import CharityScroller from '../components/CharityScroller';
import MintButton from './../components/Mint/MintButton';


const Container = styled.div`
  min-height: ${props => props.height - 100}px; //for header
  @media only screen and (max-width: 1000px){
    height: 600px;
  }
`;

const InnerCont = styled.div`
  height: ${props => props.height - 180}px; //for header and infolin e
  @media only screen and (max-width: 1000px){
    height: 820px;
  }
`;

const DescOuterCont = styled.div`
  height: 60%;
  /* background-color: antiquewhite; */
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  align-items: center;
  justify-content: center;
`;

const DescInnerCont = styled.div`
  border-radius: 10px;
`;

const TextCont = styled.div`
  max-width: 300px;
  text-align: center;
`;

const SocialButtons = styled.div`
  max-width: 250px;
  display: flex;
  justify-content: center;
  margin: 20px auto 0 auto;
`;

const InfoCont = styled.div`
  width: 100%;
  height: 80px;
  background-color: red;
  box-shadow: 1px -3px 33px -12px rgba(0,0,0,0.5);
`;

const InfoLine = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${props => props.color || 'aliceblue'};
  font-weight: bold;
  width: ${props => props.width};
  background-color: ${props => props.backgroundColor || 'default'};
  overflow: hidden;
`;

const SmallInfoLineText = styled.div`
  font-size: 10px;
`;

const TopInfoCont = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.color};
`;

const SocialCont = styled.div`
  position: absolute;
  left: 35px;
  top: 35px;
  width: 150px;
  height: 500px;
`;

const HomePage = () => {
  const { height: windowHeight } = useWindowDimensions();
  const [ timeLeft, setTimeLeft ] = useState('');
  const [ timerEnded, setTimerEnded ] = useState(true);
  const mintingStartTime = new Date(2022, 4, 11, 17);

  useCountdown(mintingStartTime, {
    interval: 1000,
    onDown: setTimeLeft,
    onEnd: () => {
      if(!timerEnded) setTimerEnded(true)
    },
  });

  const goToSocials = (route) => () => 
    window.open(route, '_blank');

  const formattedTime = moment(timeLeft).format('m:s');

  return (
    <Container height={windowHeight || 0}>
      <SocialCont>
        <SocialButton
          onClick={goToSocials('https://discord.gg/FV64sj65aK')}
          color='#0057B7'
        >
          discord
        </SocialButton>
        <SocialButton
          onClick={goToSocials('https://twitter.com/Imag3Aid')}
          style={{marginTop: 10}} 
          color='#FFDD00'
          textColor="black"
        >
          twitter
        </SocialButton>

      </SocialCont>

      <InnerCont height={windowHeight}>
        <DescOuterCont>
          <DescInnerCont>
            <TextCont>
              <H1>Imag3Aid</H1>
              <H2>57 Photographers<br/>One Cause</H2>
              <Text>100% of proceeds donated to Ukrainian Emergency Relief Fund</Text>
            </TextCont>

            <SocialButtons>
              {
                timerEnded 
                ? <MintButton />
                : (
                  <>
                    <SocialButton
                      onClick={goToSocials('https://twitter.com/Imag3Aid')}
                      style={{marginRight: 15}} 
                      color='#0057B7'
                    >
                      twitter
                    </SocialButton>
                    <SocialButton 
                      onClick={goToSocials('https://discord.gg/FV64sj65aK')}
                      color='#FFDD00' 
                      textColor='black'
                    >
                      discord
                    </SocialButton>
                  </>
                )
              }

            </SocialButtons>
          </DescInnerCont>
        </DescOuterCont>
      </InnerCont>



      <InfoCont>
        <TopInfoCont color='#0057B7'>

        <InfoLine width='40%'>
            Mint Date: April 11th - Noon EST
            <SmallInfoLineText>
              .05 Eth | 50 Editions per image
            </SmallInfoLineText>
          </InfoLine>
          <InfoLine width='20%'>
            <H3>Countdown</H3>
            {formattedTime === 'Invalid date' && 'Timer ended'}
            {formattedTime !== 'Invalid date' && formattedTime}
          </InfoLine>
          <InfoLine width='40%'>
            10 mints / wallet
            <SmallInfoLineText>
              Blind mint from a collection of 2850 total
            </SmallInfoLineText>
          </InfoLine>
        </TopInfoCont>
        <InfoLine width='100%' backgroundColor='#FFDD00' color="black">
          <CharityScroller />
        </InfoLine>
      </InfoCont>
    </Container>
  );
};

export default HomePage;