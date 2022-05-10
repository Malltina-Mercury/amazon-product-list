import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const SearchInput = ({searchQuery, onChange, onSubmit}) => {
  return (
    <>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Search Here ..."
        keyboardType="web-search"
        value={searchQuery}
        underlineColorAndroid="transparent"
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    height: 50,
    margin: 10,
    marginBottom: 30,
    borderWidth: 1,
    paddingLeft: 20,
    borderColor: '#009688',
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default SearchInput;
