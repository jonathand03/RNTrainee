/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MyApp: React.FC = () => {
    return (
        <View>
            <Text style={AppStyle.textContainer}>Ola, Jonathan</Text>
        </View>
    );
};
const AppStyle = StyleSheet.create({
    textContainer: {
        color: 'white',
        fontSize: 30,
    },
});

export default MyApp;
