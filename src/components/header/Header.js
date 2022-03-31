import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100px;
  /* background-color: antiquewhite; */
`;

const Logo = styled.img`
  height: 100px;
  padding-top: 30px;
  padding-right: 30px;
  object-fit: cover;
  position: absolute;
  right: 0;

  &:hover {
    cursor: pointer;
  }
`;

const handleLogoPress = () => {
  window.open('https://facebook.com', '_blank');
}

const Header = () => {
  return (
    <Container>
      <Logo onClick={handleLogoPress} src='/logos/logo.png' />
    </Container>
  )
};

export default Header;