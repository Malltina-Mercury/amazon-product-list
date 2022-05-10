import React from 'react';
import {StyleSheet, View} from 'react-native';
import SearchView from '../views/SearchView';

const App = () => {
  return (
    <View style={styles.container}>
      <SearchView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    flex: 1,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
});

export default App;
