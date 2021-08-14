import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ListItem from './components/ListItem';

export default function App() {
    return (
        <View style={styles.container}>
            <ListItem
                title="ndadayo!!ndadayo!!"
                author="nda sugawara"
                imageUrl='https://reactnative.dev/img/tiny_logo.png'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
