import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import RecycleList from './src/views/RecycleList';

const App = () => {
  return (
    <View style={styles.container}>
      <RecycleList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
});

export default App;
