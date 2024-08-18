import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.h1`
  text-align: center;
  margin-top: 20px;
  font-size: 2.5rem;
`;

const Title = () => {
  return <TitleWrapper>Lista de Produtos</TitleWrapper>;
};

export default Title;
