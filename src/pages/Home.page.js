import React from 'react';
import styled from 'styled-components';

import useWindowDimensions from '../hooks/useWindowDimensions';

import { H1, H2, Text } from '../framework';
import CharityScroller from '../components/CharityScroller';
import MintButton from '../components/Mint/MintButton'

const Container = styled.div`
  height: ${props => props.height - 100}px; //for header
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
`;

const SocialButtons = styled.div`
  max-width: 250px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const InfoCont = styled.div`
  position: absolute;
  bottom: 0;
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

const HomePage = () => {
  const { height: windowHeight } = useWindowDimensions();
  return (
    <Container height={windowHeight || 0}>
      <DescOuterCont>
        <DescInnerCont>
          <TextCont>
            <H1>Imag3Aid</H1>
            <H2>Random title idk</H2>
            <Text>Text that would look nice if its more than this, right? Should this be smaller text?</Text>
          </TextCont>

          <SocialButtons>
            <MintButton />
            {/* <SocialButton style={{marginRight: 15}} color='#0057B7'>twitter</SocialButton>
            <SocialButton color='#FFDD00' textColor='black'>discord</SocialButton> */}
          </SocialButtons>
        </DescInnerCont>
      </DescOuterCont>
      <InfoCont>
        <TopInfoCont color='#0057B7'>
          <InfoLine width='40%'>
            .05eth | 50 editions per image
            <SmallInfoLineText>
              Blind mint from a collection of 5000 total
            </SmallInfoLineText>
          </InfoLine>
          <InfoLine width='20%'>
            Minting has started
          </InfoLine>
          <InfoLine width='40%'>
            Mint Date: April 11th - Noon EST
            <SmallInfoLineText>
              .05 Eth / 50 Editions per image - blind mint from a collection of 2800 total
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