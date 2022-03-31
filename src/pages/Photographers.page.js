import React from 'react';
import styled from 'styled-components';

import images from './../images.json';
import { Text } from './../framework';
import PageWithImage from '../components/PageWithImage';

const PhotographerList = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 5% 0 10%;
`;

const PhotographerRow = styled.div`
  width: 33.33%;
`;

const Photographer = styled(Text)`
  line-height: 30px;
`;

const Photographers = () => {
  const imageArray = Object.entries(images);

  const row1 = [], row2 = [], row3 = [];
  let nextRowToPushTo = 1;

  const sortedImages = imageArray.sort((img, nextImg) => {
    return img[0] < nextImg[0] ? -1 : 1
  });

  sortedImages.forEach(image => {
    if(nextRowToPushTo === 1){
      row1.push(image[1]);
      nextRowToPushTo++
    } else if (nextRowToPushTo === 2) {
      row2.push(image[1]);
      nextRowToPushTo++
    } else if (nextRowToPushTo === 3) {
      row3.push(image[1]);
      nextRowToPushTo = 1;
    }
  })

  return (
    <PageWithImage
      src='/images/BarbaraDavidson.jpg'
      alt="Image made by Marshall Scheuttle"
      title="Photographers"
    >
      <PhotographerList>
        <PhotographerRow>
          {
            row1.map(photographer => (
              <Photographer 
                key={`photographer: ${photographer}`}
              >
                {photographer}
              </Photographer>
            ))
          }
        </PhotographerRow>
        <PhotographerRow>
        {
          row2.map(photographer => (
            <Photographer
              key={`photographer: ${photographer}`}
            >
              {photographer}
            </Photographer>
          ))
        }
        </PhotographerRow>
        <PhotographerRow>
        {
          row3.map(photographer => (
            <Photographer
              key={`photographer: ${photographer}`}
            >
              {photographer}
            </Photographer>
          ))
        }
        </PhotographerRow>
      </PhotographerList>
    </PageWithImage>
   
  )
};

export default Photographers;