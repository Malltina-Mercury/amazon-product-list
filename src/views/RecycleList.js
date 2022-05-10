import React from 'react';
import {Text, View} from 'react-native';
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
              <Text>
                {item.title}
                {'\n'}
                ------------
              </Text>
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
