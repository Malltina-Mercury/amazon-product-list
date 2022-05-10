import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const SearchBtn = () => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="web-search"
      />
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SearchBtn;
