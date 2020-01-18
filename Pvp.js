import React from 'react';
import {Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Pvp({history}) {

    return (
        <View>
            <View>
                <TouchableOpacity onPress= {() => history.push("/play")}>
                    <Image style = {styles.arrow}
                           source = {require("./assets/Arrow.png")}/>
                </TouchableOpacity>
                <Text style={styles.titleBar}>Who will Prevail?</Text>
            </View>
            <Image
                style = {styles.backgroundImage}
                source = {require('./assets/board.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    arrow: {
        width: 75,
        height: 75,
        marginTop: 20
    }
    ,
    titleBar: {
        textAlign: "center",
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 30,
    },
    backgroundImage: {
        width: 375,
        height: 375,
        position: "absolute",
        left: 18,
        top: 250
    }
});
