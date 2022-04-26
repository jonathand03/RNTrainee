import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LoginArea = () => {
    return (
        <View style={loginAreaStyle.container}>
            <Text>Login</Text>
        </View>
    )
}

export default LoginArea;

const loginAreaStyle = StyleSheet.create({
    container: {
        width: 200,
        height: 40,
        borderColor: 'red'
    }
})