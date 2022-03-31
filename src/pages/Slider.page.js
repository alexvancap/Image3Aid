import React from "react";
import styled from 'styled-components';

import useWindowDimensions from "../hooks/useWindowDimensions";

import images from  './../images.json';
import Carousel from 'nuka-carousel';
import { H2 } from "../framework";

const Container = styled.div`
  display: block;
  height: ${props => props.height}px;
  width: 100%;
`;

const SlideCont = styled.div`
  height: ${props => props.height}px;
  width: 100%;
  
  background: ${props => `url('/images/${props.imagename}.jpg')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const PhotographerName = styled(H2)`
  align-self: flex-end;
  float: right;
  margin: 40px;
  padding: 20px;
  border-radius: 5px;
  color: aliceblue;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 5;
`;

const SliderPage = ({width}) => {
  const { height: windowHeight } = useWindowDimensions();

  const imageArray = Object.entries(images);

  const hideSliderNav = (key) => {
    if(key === 'BottomCenter'){ 
      return {
        display: 'none'
      }
    }
  }

  return (
    <Container height={ width || windowHeight}>
      <Carousel 
        autoplay
        autoplayInterval={3000}
        wrapAround
        getControlsContainerStyles={hideSliderNav}
      >
        {
          imageArray.map(image => (
            <SlideCont key={image[0]} imagename={image[0]} height={windowHeight}>
              <PhotographerName>{image[1]}</PhotographerName>
            </SlideCont>
          ))
        }
      </Carousel>
    </Container>
  )
};

export default SliderPage;