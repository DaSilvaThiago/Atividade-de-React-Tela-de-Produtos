import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const Image = ({ src, alt }) => {
  return <ImageWrapper src={src} alt={alt} />;
};

export default Image;
