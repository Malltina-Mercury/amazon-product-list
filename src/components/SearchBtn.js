import React, {useState} from 'react';
import {StyleSheet, TextInput, Button} from 'react-native';

const SearchBtn = ({setSearchInput, searchInput}) => {

  const eventHandler = text => {
    setSearchInput(text);
  };

  return (
    <>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Search Here ..."
        keyboardType="web-search"
        value={searchInput}
        underlineColorAndroid="transparent"
        onChangeText={text => eventHandler(text)}
      />
    </>
  );
};
const styles = StyleSheet.create({
  textInputStyle: {
    height: 50,
    marginBottom: 30,
    borderWidth: 1,
    paddingLeft: 20,
    borderColor: '#009688',
    backgroundColor: 'white',
    borderRadius: 30,
  },
});

export default SearchBtn;
