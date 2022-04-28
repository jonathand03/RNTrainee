/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header: React.FC = () => {
    return (
        <View>
            <Text style={style.textContainer}>Ola, Jonathan</Text>
        </View>
    );
};
const style = StyleSheet.create({
    textContainer: {
        color: 'white',
        fontSize: 30,
    },
});

export default Header;
