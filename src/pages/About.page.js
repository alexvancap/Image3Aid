import React from 'react';
import styled from 'styled-components';

import { Text } from '../framework';
import PageWithImage from '../components/PageWithImage';

const AboutText = styled(Text)`
  width: 80%;
  align-self: center;
  text-align: center;
  line-height: 23px;
`;

const EmergencyResponseLink = styled.a`
  color: black;
`;

const AboutPage = () => {
  return (
    <PageWithImage
      src="/images/AlecSoth.jpg"
      alt="Image of Richard Pilnick"
      title="About"
      imageIsLeft={false}
    >
      <AboutText>
        Imag3Aid was formed by a group of photographers in the NFT community in the days following Russia’s invasion of Ukraine. We came together to support Ukrainians whose lives and livelihoods have been imperiled by this war.
        Imag3Aid’s NFT collection will be comprised of 50 works from 50 of the most prominent photographers in the NFT space. These works will be available to mint as editions of  (xx), available to collectors for .05 ETH each.
        100% of primary sales and secondary royalties will be donated directly to <EmergencyResponseLink href="https://thegivingblock.com/campaigns/ukraine-emergency-response-fund/" target="_blank" rel="noreferrer">the Ukraine Emergency Response Fund</EmergencyResponseLink>, a basket of 501(c)(3) charitable organizations offering various forms of humanitarian aid to Ukrainians.
      </AboutText>
    </PageWithImage>
  )
}

export default AboutPage;