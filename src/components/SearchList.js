import React from 'react';
import ProductCard from './card/ProductCard';

const SearchList = ({products}) => {
  return (
    <>
      {products?.map((item, i) => (
        <ProductCard item={item} key={i} />
      ))}
    </>
  );
};

export default SearchList;
