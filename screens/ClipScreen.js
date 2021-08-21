import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

export default function ClipScreen({route}) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{margin: 10, fontSize: 30}}>Clip</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});
