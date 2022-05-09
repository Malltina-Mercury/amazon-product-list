import React, {useState, useEffect, TextInput} from 'react';
import {Text, View} from 'react-native';
import SearchBtn from '../components/SearchBtn';
import request from '../utils';

const RecycleList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    request('sony').then(({data}) => setItems(Object.entries(data.products)));
  }, []);

  return (
    <View>
      <SearchBtn />
      <Text>list</Text>
    </View>
  );
};

export default RecycleList;
