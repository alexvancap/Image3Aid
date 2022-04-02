import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 50px;
  background-color: ${props => props.color};
  color: ${props => props.textColor || 'aliceblue'};
  padding: 10px 20px 10px 20px;
  text-align: center;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    
  }
`;

const SocialButton = ({type, color, children, style, textColor, ...props}) => {
  return (
    <Container 
      color={color} 
      style={style}
      textColor={textColor}
      {...props}
    >
      {children}
    </Container>
  )
}

export default SocialButton