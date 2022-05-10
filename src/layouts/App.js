import React from 'react';
import {StyleSheet, View} from 'react-native';
import RecycleList from '../views/RecycleList';

const App = () => {
  return (
    <View style={styles.container}>
      <RecycleList />
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
