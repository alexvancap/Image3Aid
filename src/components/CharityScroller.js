import React from "react";
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

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
]

const CharityText = styled.div`
  height: 30px;
`;

const CharityWrapper = styled.marquee`
  height: 40px;
  line-height: 40px;
  white-space: nowrap;
`;

const AnimatedCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const CharityScroller = () => {
  const styles = useSpring({
    // from: { transform: "translateY(0%)" },
    // to: [
    //   { transform: "translateY(-50%)" },
    //   { transform: "translateY(0%)"},
    // ],
    // config: { duration: "50000" },
    // loop:true
  });

  const getCharityString = () => {
    let string = '';
    charities.forEach((charity, index) => {
      if(index !== 0 && index !== charities.length -1){
        return string += `, ${ charity }`
      }
      string += ` ${charity}`
    })
    return string;
  }

  console.log('huuuuuuh',getCharityString())

  return (
    // <animated.div style={styles}>
      <AnimatedCont>
        <CharityWrapper>
          {/* {getCharityString()} */}
          {charities.map(charity => { 
            return `, \n \r ${charity}` 
          })}
        </CharityWrapper>
 
      </AnimatedCont>
    // </animated.div>
  );
};

export default CharityScroller;