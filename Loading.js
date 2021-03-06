import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Loading(){
    return <View style={styles.container}>
        <Text style={styles.text}>Getting the weather info...</Text>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#ffbe76"
    },
    text: {
        color: "#535c68",
        fontSize: 30
    }
});