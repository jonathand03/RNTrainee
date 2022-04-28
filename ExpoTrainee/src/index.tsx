import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginArea from './components/login'
import MyButton from './components/Button';
const Main = () => {
    return (
        <View style={PageStyle.PageContainer}>
            <LoginArea></LoginArea>
            <MyButton></MyButton>
            <StatusBar style="auto" />
        </View>
    )
};


export default Main;

const PageStyle = StyleSheet.create({
    PageContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#68AD6B',
        alignItems: 'center',
        alignContent: 'center'
    }
});