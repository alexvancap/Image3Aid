import React from "react";
import styled from 'styled-components';

const charities = [
  'Lutheran World Relief',
  'Lawyers for Good Government (L4GG)',
  'ActionAid USA',
  'Food For Life Global-Americas',
  'FOUR PAWS USA',
  'International Medical Corps',
  'SOS Children’s Villages',
  'Committee to Protect Journalists',
  'Habitat for Humanity Australia',
  'Catholic Relief Services',
  'Direct Relief',
  'Global Heritage Fund',
  'International Fund for Animal Welfare (IFAW)',
  'All Hands and Hearts Smart Response, Inc.',
  'WONDER Foundation',
  'Team Rubicon',
  'Forgotten Animals',
  'OutRight Action International',
  'International Crisis Group',
  'Women for Women International',
  'United Way Worldwide',
  'Global Fund for Children',
  'Good36',
  'Action Against Hunger USA',
  'Opulent Philanthropy Inc',
  'CARE',
  'Project HOPE',
  'Alight',
  'World Central Kitchen',
  'Save the Children',
  'Hearts & Homes for Refugees',
];

const CharityWrapper = styled.marquee`
  height: 40px;
  line-height: 40px;
  white-space: nowrap;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const CharityScroller = () => {

  return (
      <Container>
        <CharityWrapper>
          {charities.map((charity, index) => { 
            if(index !== 0 && index !== charities.length){
              return `, ${charity}`;
            }
            return ` ${charity}`;
          })}
        </CharityWrapper>
 
      </Container>
  );
};

export default CharityScroller;