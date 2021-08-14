import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import ListItem from './components/ListItem';
import dummyArticles from './articles.json';

export default function App() {
    const [articles, setArticles] = useState(dummyArticles);
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={articles}
                renderItem={({item}) => (
                    <ListItem
                        title={item.title}
                        author={item.author}
                        imageUrl={item.urlToImage}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
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
