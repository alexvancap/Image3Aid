import React from "react";
import styled from 'styled-components';
import PageWithImage from "../components/PageWithImage";
import partners from './../data/partners.json';

const partnersArray = Object.entries(partners);

const Container = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-flow: row wrap;
`;

const PartnerCont = styled.div`
  box-sizing: border-box;
  /* padding: 30px; */
  width: 33.3333%;
  height: 33.3333%;
  padding: 30px;

  /* &:hover{
    opacity: 0.7;
    cursor: pointer;
  } */
`;

const PartnerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PartnersPage = () => {


  return(
    <PageWithImage 
      title="Community Partners"
      src="/images/CarloVandeRoer.jpg"
      alt="Image taken by Richard Pilnick"
      imageIsLeft={false} 
    >
      <Container>
        {
          partnersArray.map(partner => {
            return(
            <PartnerCont
              key={`partnerImage: ${partner[1].name}`}
            >
              <PartnerImage
                src={`/logos/partners/${partner[0]}.${partner[1].imgType}`}
                alt={`Logo of ${partner[1].name}`}
              />
            </PartnerCont>
          )})
        }
      </Container>
    </PageWithImage>

  )
};

export default PartnersPage;