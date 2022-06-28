import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const Header : React.FC = () =>{
  return(
    <SafeAreaView >
      <Text style={style.Title}>Ola, jonathan !</Text>
    </SafeAreaView>
  );
};


export default Header;

const style = StyleSheet.create({

  Title:{
    color: 'white',
    fontSize: 30,
  },
});
