import styled from 'styled-components';


const H1Styled = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 50px;
  font-family: century-gothic, sans-serif;
  font-weight: 600;
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const H2Styled = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 25px;
  font-family: century-gothic, sans-serif;

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

const H3Styled = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 15px;
  font-family: century-gothic, sans-serif;

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

const TextStyled = styled.p`
  margin: 0;
  padding: 0;
  font-family: 'Mulish', sans-serif;
  font-weight: 300;
`;

export const H1 = ({children, ...props}) => (
  <H1Styled widthOnly {...props}>{children}</H1Styled>
);

export const H2 = ({children, ...props}) => (
  <H2Styled {...props}>{children}</H2Styled>
);

export const H3 = ({children, ...props}) => (
  <H3Styled {...props}>{children}</H3Styled>
);


export const Text = ({children, ...props}) => (
  <TextStyled { ...props }>{children}</TextStyled>
)