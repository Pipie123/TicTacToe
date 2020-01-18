import React from 'react';
import {Animated, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function Home({history}) {

    return (
        <View>
            <View style = {styles.mainContainer}>
                <View style = {styles.container}>
                    <Image
                        style = {styles.introImage}
                        source = {require('./assets/Tic.png')}
                    />
                </View>
                <View style = {styles.container1}>
                    <Image
                        style = {styles.introImage}
                        source = {require('./assets/Tac.png')}
                    />
                </View>
                <View style = {styles.container2}>
                    <Image
                        style = {styles.introImage}
                        source = {require('./assets/Toe.png')}
                    />
                </View>
                <Image
                    style = {styles.backgroundImage}
                    source = {require('./assets/board.png')}/>
            </View>
            <TouchableOpacity onPress= {() => history.push("/play")}>
                <Text style = {styles.startFont}>Tap to Start</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    mainContainer: {
        padding: 0,
        margin: 0,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    container: {
        paddingTop: 130,
        maxHeight: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container1: {
        padding: 80,
        maxHeight: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        paddingBottom: 140,
        maxHeight: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    introImage: {
        width: 375,
        height: 125
    },
    backgroundImage: {
        width: 375,
        height: 375,
        position: "absolute",
        left: 18,
        top: 110
    },
    startFont: {
        textAlign: "center",
        color: "#cccccc",
        fontFamily: "Roboto",
        fontWeight: "bold",
        letterSpacing: 10,
        fontSize: 60
    }
});
