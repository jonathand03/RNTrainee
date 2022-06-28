import React,{useState} from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';

import  Header  from '../src/components/Header/index';



const App : React.FC = () =>{
  const [name,setName] = useState<string>('Jonathan');
  const [title,setTitle] = useState<string>('Olá ');
  const [count, setCount] = useState<number>(0);

  const handlePressButton = () =>{
    name == 'Jonathan' ? setName('Paulo') : setName('Jonathan');
  }

  const handlePressCountButton = () =>{
    count == 30 ? setCount(0) : setCount(count+1);
  }

  return(
    <SafeAreaView style={style.App}>
      <Header welcomeMessage='Welcome, ' name={name}></Header>
      <Text style={style.Textcolor}>{count}</Text>
      <Button title='Change name' onPress={handlePressCountButton}></Button>
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
  Textcolor:{
    color: 'white',
    fontSize: 20
  }
});
