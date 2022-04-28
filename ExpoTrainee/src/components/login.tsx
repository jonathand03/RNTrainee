import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native';

const LoginArea = () => {
    return (
        <>
            <TextInput style={loginAreaStyle.userLogin} placeholder='Login'>
            </TextInput>
            <TextInput secureTextEntry={true} style={loginAreaStyle.passwordLogin} placeholder='Senha'>
            </TextInput>

        </>
    )
};

export default LoginArea;

const loginAreaStyle = StyleSheet.create({
    userLogin: {
        width: 350,
        height: 70,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        marginTop: '20%',
        textAlign: 'center'
    },
    passwordLogin: {
        width: 350,
        height: 70,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        marginTop: '5%',
        textAlign: 'center'
    }
})