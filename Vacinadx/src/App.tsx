import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const App : React.FC = () =>{
  return(
    <SafeAreaView style={style.App}>
      <Text style={style.Title}>Welcome !</Text>
    </SafeAreaView>
  );
};


export default App;

const style = StyleSheet.create({
  App:{
    flex:1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Title:{
    color: 'white',
    fontSize: 30,
  },
});
