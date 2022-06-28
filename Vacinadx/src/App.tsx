import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import  Header  from '../src/components/Header/index';

const App : React.FC = () =>{
  return(
    <SafeAreaView style={style.App}>
      <Header welcomeMessage='Bem-vindo!' name='Jonatha Drumond'></Header>
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
});
