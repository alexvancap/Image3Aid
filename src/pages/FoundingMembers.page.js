import React from "react";
import styled from "styled-components";
import PageWithImage from "../components/PageWithImage";

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 30px;
  margin-top: 50px;
`;

const Row = styled.div`
  width: 35%;
`;

const FounderText = styled.div`
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  font-size: 18px;
  text-align: center;

  &:hover{
    cursor: pointer;
    opacity: 0.7;
  }
`;

const founders = [
  { name: 'Gregory Eddi Jones', url: 'https://twitter.com/EddiJonesNFT' },
  {  name: 'Wim Van Capellen', url: 'https://twitter.com/WimVanCappellen' },
  {  name: 'Taimazz', url: 'https://twitter.com/taiimazz' },
  {  name: 'Zak Krevit', url: 'https://twitter.com/zak_krevitt' },
  {  name: 'Richard Pilnik', url: 'https://twitter.com/richardpilnick' },
  {  name: 'Hugo Faz', url: 'https://twitter.com/HugoFaz' },
  {  name: 'Maciej Miliszkiewicz', url: 'https://twitter.com/MMiliszkiewicz' },
  {  name: 'Amy Li', url: 'https://twitter.com/amy_li' },
  {  name: 'Ava Silvery', url: 'https://twitter.com/AvaSilvery' },
  {  name: 'Mickey Smith', url: 'https://twitter.com/MickeySmithArt' },
  {  name: 'Mehdi Benembarek', url: 'https://twitter.com/MehdiBenembarek' },
  {  name: 'Bozo (back-end developer)', url: 'https://twitter.com/bozo_eth' },
  {  name: 'Jonas (front-end developer)', url: 'https://jonas.vip/' },
  // {  name: 'Alex (front-end developer)', url: '' }
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
            );
          })
        };
      </Container>
    </PageWithImage>

  )
};

export default FoundingMembersPage;