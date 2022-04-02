import React from 'react';
import styled from 'styled-components';
import './index.css';

import HomePage from './pages/Home.page';
import Header from './components/header/Header'
import SliderPage from './pages/Slider.page';
import AboutPage from './pages/About.page';
import Photographers from './pages/Photographers.page';
import PartnersPage from './pages/Partners.page';
import FoundingMembersPage from './pages/FoundingMembers.page';
import GivingBlockPage from './pages/GivingBlock.page';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  min-width: 1000px;
  /* background-color: aliceblue; */
`;

const HomeCont = styled.div`
  background: url('/images/lorenzoMeloni.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const PaddingCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <HomeCont>
        <Header />
        <HomePage />
      </HomeCont>
      <SliderPage showSelection={true} />
      <PaddingCont>
        <AboutPage />
        <Photographers />
        <PartnersPage />
        <FoundingMembersPage />
        <GivingBlockPage />
      </PaddingCont>
    </Container>
  )
}

export default App;
