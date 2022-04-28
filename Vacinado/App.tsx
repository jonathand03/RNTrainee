/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Header from './src/components/Header/index';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  textContainer: {
    color: 'white',
    fontSize: 30,
  },
});

export default App;
