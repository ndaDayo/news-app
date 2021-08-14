import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

export default function ArticleScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>nda!!text</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});
