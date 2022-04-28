import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MyButton = () => {
    const [user, getUser] = useState<string>("");
    const getUserName = (name: string) => {
        if (name.search(' ')) {
            alert("Seu usuário não pode conter espaço");
        }
        else {
            getUser(name);
        }
    }
    return (
        <>
            <TouchableOpacity style={ButtonStyle.ButtonContaier}
                onPress={() => MyButton}
            >
                <Text style={ButtonStyle.TextButton}>Entrar</Text>
            </TouchableOpacity>
        </>
    )
};

export default MyButton;

const ButtonStyle = StyleSheet.create({
    ButtonContaier: {
        backgroundColor: '#758FF0',
        borderRadius: 15,
        width: 120,
        height: 60,
        justifyContent: 'center',
        marginTop: '10%'
    },
    TextButton: {
        color: 'white',
        fontWeight: '900',
        fontSize: 20,
        alignSelf: 'center'
    }
});