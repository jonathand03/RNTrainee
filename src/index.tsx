import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Text>Esse é o meu primeiro Expo</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        backgroundColor: '#DBD92A',
        width: 100,
        height: 30,
        borderRadius: 15,
    },
});


export default App;