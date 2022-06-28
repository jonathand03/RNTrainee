import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import {Props} from './types'

const Header = (props:Props) =>{
  return(
    <SafeAreaView >
      <Text style={style.Welcome}>{props.welcomeMessage}</Text>
      <Text style={style.UserName}>{props.name}</Text>
    </SafeAreaView>
  );
};


export default Header;

const style = StyleSheet.create({

  Welcome:{
    color: 'white',
    fontSize: 30,   
  },
  UserName:{
    color: 'white',
    fontSize: 25,
  }
  
});
