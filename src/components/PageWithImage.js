import React from 'react';
import styled from 'styled-components';

import useWindowDimensions from './../hooks/useWindowDimensions';

import { H1 } from '../framework';
import SliderPage from '../pages/Slider.page';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${props => props.height}px;
  @media only screen and (max-width: 700px){
    height: 800px;
  }
`;

const Image = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  @media only screen and (max-width: 700px){
    min-height: 100%;
  }
`;

const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  padding-top: ${props => props.paddingTop || 0}px;

  @media only screen and (max-width: 700px){
    min-height: 100%;
  }
`;

const Title = styled(H1)`
  text-align: center;
  margin-bottom: 40px;
`;

const PageWithImage = ({  showSelection=false, children, imageIsLeft=true, src, alt, title, titleStyle, slider=false, paddingTop}) => {
  const { height: windowHeight } = useWindowDimensions()

  const childrenWithWrapper = (
    <ChildrenWrapper paddingTop={paddingTop}>
      <Title style={titleStyle}>{title}</Title>
      {children}
    </ChildrenWrapper>
  )

  return (
    <Container height={windowHeight}>
      {
        imageIsLeft
        ? (
          <>
            {slider ? <SliderPage showSelection={showSelection} halfWidth /> : <Image src={src} alt={alt} />}
            {childrenWithWrapper}
          </>
        )
        : (
          <>
            {childrenWithWrapper}
            {slider 
              ? <SliderPage showSelection={showSelection} halfWidth halfWith/>
              : <Image src={src} alt={alt} />
            }
          </>
        )
      }
    </Container>

  )
};

export default PageWithImage;