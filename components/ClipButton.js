import React from 'react';
import {FontAwesome} from '@expo/vector-icons';
import {StyleSheet, TouchableOpacity} from "react-native";

const ClipButton = ({onPress, enabled}) => {
    const name = enabled ? 'bookmark' : 'bookmark-o';
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <FontAwesome name={name} size={40} color="gray"/>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
    }
});

export default ClipButton;
