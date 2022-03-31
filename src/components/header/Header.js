import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100px;
  /* background-color: antiquewhite; */
`;

const Logo = styled.img`
  height: 170px;
  padding-top: 20px;
  padding-left: 20px;
  object-fit: cover;

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