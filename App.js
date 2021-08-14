import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <View style={styles.leftContainer}>
                    <Image
                        style={{width: 100, height: 100}}
                        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                    />
                </View>
                <View style={styles.rightContainer}>
                    <Text numberOfLines={3} style={styles.text}>NdaDayo!!</Text>
                    <Text style={styles.subText}>News subText</Text>
                </View>
            </View>
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
    itemContainer: {
        height: 100,
        width: "100%",
        borderColor: "gray",
        borderWidth: 1,
        flexDirection: "row"
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16,
        color: "gray",
    },
    subText: {
        fontSize: 12
    },
    leftContainer: {
        width: 100,
    },
});
