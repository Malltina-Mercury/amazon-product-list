import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SearchBtn from '../components/SearchBtn';
import useSearchApi from '../hooks/useSearchApi';

const RecycleList = () => {

  const [searchInput, setSearchInput] = useState('')

  const {data, isLoaded} = useSearchApi(searchInput, []);

  console.log(searchInput)



  return (
    <View style={styles.item}>
      {isLoaded ? (
        <>
          <SearchBtn setSearchInput={setSearchInput} searchInput={searchInput}/>
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

const styles = StyleSheet.create({
  item: {
    padding: 1,
    fontSize: 20,
    marginTop: 15,
  },
});
export default RecycleList;
