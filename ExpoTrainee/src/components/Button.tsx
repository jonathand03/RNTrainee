import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Button = () => {
    return (
        <TouchableOpacity style={StyledButton.buttonContainer}>
            <Text>Ok</Text>
        </TouchableOpacity>
    )
}



const StyledButton = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: 15,
        width: 400,
        height: 30,
        backgroundColor: '#481CE8',
    }
});

export default Button;