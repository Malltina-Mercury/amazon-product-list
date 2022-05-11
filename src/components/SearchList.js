import React from 'react';
import ProductCard from './card/ProductCard';
import {FlatList, View} from 'react-native';

const SearchList = ({products}) => {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={item => <ProductCard item={item} />}
      />
    </View>
  );
};

export default SearchList;
