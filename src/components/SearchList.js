import React from 'react';
import {Text} from 'react-native';

const SearchList = ({products}) => {
  return (
    <>
      {products?.map((item, i) => {
        return (
          <Text key={i}>
            {item.title}
            {'\n'}
            ------------
          </Text>
        );
      })}
    </>
  );
};

export default SearchList;
