import React from 'react';
import {Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Play extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const history = this.props;
        return (
            <View>
                <View>
                    <TouchableOpacity onPress={() => this.props.history.push("/")}>
                        <Image style={styles.arrow}
                               source={require("./assets/Arrow.png")}/>
                    </TouchableOpacity>
                    <Text style={styles.titleBar}>Choose a Game Mode</Text>
                </View>
                <View style={styles.buttonMainContainer}>
                    <Image style={styles.customImage1}
                           source={require("./assets/shield.png")}/>
                    <View style={styles.customButton1}>
                        <TouchableOpacity onPress={() => this.props.history.push("/pvp")}>
                            <Text style={styles.customButtonFont1}>V.S. Player</Text>
                        </TouchableOpacity>
                    </View>
                    <Image style={styles.customImage2}
                           source={require("./assets/gear.png")}/>
                    <View style={styles.customButton2}>
                        <TouchableOpacity onPress={() => this.props.history.push("/ai")}>
                            <Text style={styles.customButtonFont2}>V.S. AI</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    mainContainer: {
        padding: 0,
        margin: 0,
        flexDirection: "column",
        justifyContent: "space-around"
    },
    arrow: {
        width: 75,
        height: 75,
        marginTop: 20
    },
    startFont: {
        textAlign: "center",
        color: "#cccccc",
        fontFamily: "Roboto",
        fontWeight: "bold",
        letterSpacing: 10,
        fontSize: 60
    },
    titleBar: {
        textAlign: "center",
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 30,
    },
    buttonMainContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    customButton1: {
        width: 200,
        height: 100,
        textAlign: "center",
        backgroundColor: "#85C8B0",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
    },
    customButtonFont1: {
        color: "white",
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: 30
    },
    customButton2: {
        width: 200,
        height: 100,
        textAlign: "center",
        backgroundColor: "#FF726F",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    },
    customButtonFont2: {
        color: "white",
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: 30
    },
    customImage1: {
        height: 200,
        width: 200
    },
    customImage2: {
        height: 200,
        width: 200
    }
});
