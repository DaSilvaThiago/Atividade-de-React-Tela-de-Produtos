import React from 'react';
import styled from 'styled-components';

const DescriptionWrapper = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 1.2rem;
  color: #666;
`;

const Description = () => {
  return <DescriptionWrapper>Aqui você encontra os melhores produtos!</DescriptionWrapper>;
};

export default Description;
