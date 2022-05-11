import React, { Component } from 'react';
import {Text, View} from 'react-native';
import ProductCard from '../components/card/ProductCard';
import SearchBtn from '../components/SearchBtn';
import useSearchApi from '../hooks/useSearchApi';

const RecycleList = () => {
  const {data, isLoaded} = useSearchApi('sony', []);

  return (
    <View>
      {isLoaded ? (
        <>
          <SearchBtn />
          <>
            {data?.products?.map(item => (
              <ProductCard item={item}/>
            ))}
          </>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default RecycleList;
