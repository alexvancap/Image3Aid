import React from "react";
import styled from "styled-components";
import PageWithImage from "../components/PageWithImage";
import { Text } from './../framework'

const Container = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  line-height: 30px;
  margin-left: 10%;
`;

const Row = styled.div`
  width: 35%;
  justify-content: flex-start;
  margin: 10px;
`;

const FounderText = styled(Text)`
  font-size: 18px;
  text-align: left;

  &:hover{
    cursor: pointer;
    opacity: 0.7;
  }
`;

const founders = [
  {  name: 'Taimaz Ashtari', url: 'https://twitter.com/taiimazz' },
  {  name: 'Mehdi Benembarek', url: 'https://twitter.com/MehdiBenembarek' },
  {  name: 'Bozo', url: 'https://twitter.com/bozo_eth' },
  {  name: 'Gregory Eddi Jones', url: 'https://twitter.com/EddiJonesNFT' },
  {  name: 'Hugo Faz', url: 'https://twitter.com/HugoFaz' },
  {  name: 'Zak Krevitt', url: 'https://twitter.com/zak_krevitt' },
  {  name: 'Amy Li', url: 'https://twitter.com/amy_li' },
  {  name: 'Maciej Miliszkiewicz', url: 'https://twitter.com/MMiliszkiewicz' },
  {  name: 'Richard Pilnick', url: 'https://twitter.com/richardpilnick' },
  {  name: 'Ava Silvery', url: 'https://twitter.com/AvaSilvery' },
  {  name: 'Alexander Van Cappellen', url: 'https://twitter.com/avancap' },
  {  name: 'Wim Van Cappellen', url: 'https://twitter.com/WimVanCappellen' },
]



const divideFoundersIn2Rows = () => {
  const row1=[], row2=[];
  let currRow=1;
  founders.forEach(founder => {
    switch (currRow) {
      case 1:
        currRow++;
        row1.push(founder);
        break;
      case 2:
        currRow = 1;
        row2.push(founder);
        break;
      default:
        break;
    }
  });

  return [row1, row2];
}


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
          divideFoundersIn2Rows().map(rowWithFounders => {
            return (
              <Row key={`rowWithFirstFounder ${rowWithFounders[0].name}`}>
                {
                  rowWithFounders.map(founder => (
                    <FounderText 
                      key={`founderText: ${founder.name}`} 
                      onClick={handleFounderClick(founder.url)}>
                        { founder.name }
                    </FounderText>
                  ))
                }
              </Row>
            )
          })
        }
      </Container>
    </PageWithImage>

  )
};

export default FoundingMembersPage;