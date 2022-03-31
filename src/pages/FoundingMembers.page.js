import React from "react";
import styled from "styled-components";
import PageWithImage from "../components/PageWithImage";

const Container = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 30px;
  margin-top: 80px;
  margin-left: 10%;
  /* margin-left: 80px; */
`;

const Row = styled.div`
  width: 35%;
`;

const FounderText = styled.div`
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  font-size: 18px;

  &:hover{
    cursor: pointer;
    opacity: 0.7;
  }
`;

const founders = [
  { name: 'Gregory Eddi Jones', url: 'https://twitter.com/EddiJonesNFT' },
  {  name: 'Wim Van Cappellen', url: 'https://twitter.com/WimVanCappellen' },
  {  name: 'Taimaz', url: 'https://twitter.com/taiimazz' },
  {  name: 'Zak Krevitt', url: 'https://twitter.com/zak_krevitt' },
  {  name: 'Richard Pilnick', url: 'https://twitter.com/richardpilnick' },
  {  name: 'Hugo Faz', url: 'https://twitter.com/HugoFaz' },
  {  name: 'Maciej Miliszkiewicz', url: 'https://twitter.com/MMiliszkiewicz' },
  {  name: 'Amy Li', url: 'https://twitter.com/amy_li' },
  {  name: 'Ava Silvery', url: 'https://twitter.com/AvaSilvery' },
  {  name: 'Mickey Smith', url: 'https://twitter.com/MickeySmithArt' },
  {  name: 'Mehdi Benembarek', url: 'https://twitter.com/MehdiBenembarek' },
  {  name: 'Bozo (back-end developer)', url: 'https://twitter.com/bozo_eth' },
  {  name: 'Alex (front-end developer)', url: 'https://twitter.com/WimVanCappellen' }
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
      src="/images/GregoryHalpern.jpg"
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