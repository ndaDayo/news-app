import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';

export default function ArticleScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <WebView
                style={styles.container}
                source={{uri: 'https://expo.dev'}}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});
