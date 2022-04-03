import React from "react";
import styled from 'styled-components';

import useWindowDimensions from "../hooks/useWindowDimensions";

import images from  './../images.json';
import Carousel from 'nuka-carousel';
import { H2 } from "../framework";

const Container = styled.div`
  display: block;
  height: ${props => props.height}px;
  max-width: ${props => props.halfWidth ? '50%' : '100%'};

  @media only screen and (max-width: 1000px){
  max-height: auto;
  }
`;

const SlideCont = styled.div`
  height: ${props => props.height}px;
  width: 100%;
  
  background: ${props => `url('/images/${props.imagename}.jpg')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${props => props.halfWidth ? 'contain' : 'cover'};
`;

const NameCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PhotographerName = styled(H2)`
  text-align: center;
  margin: 40px;
  padding: 10px;
  border-radius: 5px;
  color: aliceblue;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 5;

  ${props => props.halfWidth  && `
    float: right;
    text-align: left;
  `}
`;

const SliderPage = ({halfWidth=false, showSelection=false}) => {
  const { height: windowHeight } = useWindowDimensions();

  const imageSelection = {
    "AlessandraSanguinetti": "Alessandra Sanguinetti",
    "DavidBrandonGeeting": "David Brandon Geeting",
    "DavidGuttenfelder": "David Guttenfelder",
    "MarilynHuecopy": "Marilyn Hue",
    "MishadeRidder": "Misha de Ridder",
    "NadineBauer": "Nadine Bauer",
    "IsraelRiqueros": "Israel Riqueros",
  };


  const jsonImages = showSelection ?  imageSelection : images; 
  const imageArray = Object.entries(jsonImages);

  const hideSliderNav = (key) => {
    if(key === 'BottomCenter'){ 
      return {
        display: 'none'
      }
    }
  }

  return (
    <Container height={windowHeight} halfWidth={halfWidth}>
      <Carousel 
        autoplay
        autoplayInterval={3000}
        wrapAround={halfWidth ? false : true}
        getControlsContainerStyles={hideSliderNav}
      >
        {
          imageArray.map(image => (
            <SlideCont key={image[0]} imagename={image[0]} height={windowHeight} halfWidth={halfWidth}>
              <NameCont><PhotographerName centerText={halfWidth}>{image[1]}</PhotographerName></NameCont>
            </SlideCont>
          ))
        }
      </Carousel>
    </Container>
  )
};

export default SliderPage;