import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const Products = ({ products }) => {
  return (
    <ProductsWrapper>
      {products.map(product => (
        <Card 
          key={product.id} 
          title={product.title} 
          description={product.description} 
          imageUrl={product.imageUrl} 
        />
      ))}
    </ProductsWrapper>
  );
};

export default Products;
