import React from 'react';
import styled from 'styled-components';

import useWindowDimensions from './../hooks/useWindowDimensions';

import { H1 } from '../framework';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: ${props => props.height}px;
  width: 100%;
`;

const Image = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;

const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const Title = styled(H1)`
  text-align: center;
  margin-bottom: 40px;
`;



const PageWithImage = ({ children, imageIsLeft=true, src, alt, title, titleStyle }) => {
  const { height: windowHeight } = useWindowDimensions()

  const childrenWithWrapper = (
    <ChildrenWrapper>
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
            <Image src={src} alt={alt} />
            {childrenWithWrapper}
          </>
        )
        : (
          <>
            {childrenWithWrapper}
            <Image src={src} alt={alt} />
          </>
        )
      }
    </Container>

  )
};

export default PageWithImage;