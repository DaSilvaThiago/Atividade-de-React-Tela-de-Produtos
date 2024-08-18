import React from "react";
import styled from "styled-components";
import Image from "./Image";

const CardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  width: 200px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #333;
`;

const Card = ({ title, description, imageUrl }) => {
  return (
    <CardWrapper>
      <Image src={imageUrl} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardWrapper>
  );
};

export default Card;
