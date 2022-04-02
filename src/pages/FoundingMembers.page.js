import React from "react";
import styled from "styled-components";
import PageWithImage from "../components/PageWithImage";

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 30px;
`;

const Row = styled.div`
  width: 100%;
`;

const FounderText = styled.div`
  font-size: 15px;
  width: 50%;
  margin-left: 10%;

  &:hover{
    cursor: pointer;
    opacity: 0.7;
  }
`;

const InnerCont = styled.div`
  min-width: 65%;
  margin-left: 100px;
`;

const founders = [
  {  name: 'Taimaz Ashtari', url: 'https://twitter.com/taiimazz' },
  {  name: 'Mehdi Benembarek', url: 'https://twitter.com/MehdiBenembarek' },
  {  name: 'Bozo', url: 'https://twitter.com/bozo_eth' },
  {  name: 'Hugo Faz', url: 'https://twitter.com/HugoFaz' },
  {  name: 'Gregory Eddi Jones', url: 'https://twitter.com/EddiJonesNFT' },
  {  name: 'Zak Krevitt', url: 'https://twitter.com/zak_krevitt' },
  {  name: 'Amy Li', url: 'https://twitter.com/amy_li' },
  {  name: 'Maciej Miliszkiewicz', url: 'https://twitter.com/MMiliszkiewicz' },
  {  name: 'Richard Pilnick', url: 'https://twitter.com/richardpilnick' },
  {  name: 'Ava Silvery', url: 'https://twitter.com/AvaSilvery' },
  {  name: 'Mickey Smith', url: 'https://twitter.com/MickeySmithArt' },
  {  name: 'Alexander Van Cappellen', url: 'https://twitter.com/avancap' },
  {  name: 'Wim Van Cappellen', url: 'https://twitter.com/WimVanCappellen' },
];


const FoundingMembersPage = () => {
  const handleFounderClick = (url) => () => 
    window.open(url, '_blank');
  

  return(
    <PageWithImage 
      title="Organizers"
      src="/images/JoshuaJackson.jpg"
      alt="Image taken by Richard Pilnick"
    >
      <Container>
        {
          <InnerCont>
            { 
              founders.map(founder => {
                return (
                  <Row key={`rowWithFirstFounder ${founders.name}`}>
                    <FounderText 
                      key={`founderText: ${founder.name}`} 
                      onClick={handleFounderClick(founder.url)}>
                        { founder.name }
                    </FounderText>
                  </Row>
                )
              })
            }   
          </InnerCont>
        }
      </Container>
    </PageWithImage>

  )
};

export default FoundingMembersPage;