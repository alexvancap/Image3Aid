import * as React from 'react';
import styled from 'styled-components';

import { H1, Text } from '../framework';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Container = styled.div`
  width: 70%;

  @media only screen and (max-width: 1000px){
    width: 60%;
  }
`;

const FaqTitle = styled(H1)`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 40px;
  font-size: 35px;

  @media only screen and (max-width: 700px){
    margin-top: 40px;
  }
`;

const questionsAndAnswers = [
  {id: 1, question: 'What is Imag3Aid?', answer: 'Imag3Aid is a pop-up fundraising initiative organized by members of the NFT photography community to raise humanitarian aid for Ukraine.'},
  {id: 2, question: 'Is Imag3Aid affiliated with any curated platforms or DAOs?', answer: 'Our aim is to bring the entire NFT photography community together to rally support for Ukranians in need. Our Founding members have various affiliations with communities like Assembly, Obscura, Fellowship, KGP NFT, and NFTPhotographers. We\'ve asked leaders in these communities to send invitations to photographers in their respective communities to donate an image for this cause.'},
  {id: 3, question: 'What exactly is this fundraiser?', answer: 'We are launching a collection of images from 57 photographers from the NFT community. Each image will be available in an edition of 50, and the minting will be randomized.'},
  {id: 4, question: 'How much will it be to mint?', answer: 'Mint price will be .05 ETH + gas.'},
  {id: 5, question: 'Where is the money going to go?', answer: 'We’ve partnered with The Giving Block, who manages the Ukraine Emergency Response Fund. The fund includes about two-dozen 501(c)(3) charities providing direct relief to Ukrainians in need.'},
  {id: 6, question: 'What percentage of the funds will be donated?', answer: '100% of primary sales and secondary royalties will be donated to the fund. THe Giving Block takes a 3% fee for its administrative costs.'},
  {id: 7, question: 'Will these funds be used to support the military in any way?', answer: 'No, none of the charities in the fund provide aid related to military spending or operations.'},
  {id: 8, question: 'Can I donate an image?', answer: 'The curation is already complete, but if you\'re looking to help we would love to have you help spread the word about this initiative!'}
]

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
        <FaqTitle>FAQ</FaqTitle>
      {
        questionsAndAnswers.map(QAndA => (
          <Accordion key={`faqQuestionNum${QAndA.id}`} expanded={expanded === QAndA.id} onChange={handleChange(QAndA.id)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '100%', flexShrink: 0, marginLeft: 5, fontSize: 17 }}>
                <Text>{ QAndA.question }</Text>
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ marginLeft: 7 }}>
                <Text>{ QAndA.answer }</Text>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))
      }
    </Container>
  );
}

export default Faq;