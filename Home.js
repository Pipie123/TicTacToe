import React from 'react';
import {Animated, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            opacity: new Animated.Value(0),
            useNativeDriver: true,
        }
    }

    onLoad = () => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start()
    };
    render() {
        return (
            <View>
                <View style={styles.mainContainer}>
                    <View style={styles.container}>
                        <Animated.Image onLoad = {this.onLoad()}{...this.props} style={[styles.introImage,
                                { opacity: this.state.opacity, transform: [
                                        {scale: this.state.opacity.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0.85, 1],
                                            })

                                        }
                                    ]
                                },
                                this.props.style,
                            ]}
                            source={require('./assets/Tic.png')}
                        />
                    </View>
                    <View style={styles.container1}>
                        <Animated.Image
                            onLoad = {this.onLoad()}
                            {...this.props}
                            style={[styles.introImage,
                                {
                                    opacity: this.state.opacity,
                                    transform: [
                                        {scale: this.state.opacity.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0.85, 1],
                                            })

                                        }
                                    ]
                                },
                                this.props.style,
                            ]}
                            source={require('./assets/Tac.png')}
                        />
                    </View>
                    <View style={styles.container2}>
                        <Animated.Image
                            onLoad = {this.onLoad()}
                            {...this.props}
                            style={[styles.introImage, {
                                    opacity: this.state.opacity,
                                    transform: [
                                        {scale: this.state.opacity.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0.85, 1],
                                            })

                                        }
                                    ]
                                },
                                this.props.style,
                            ]}
                            source={require('./assets/Toe.png')}
                        />
                    </View>
                    <Image
                        style={styles.backgroundImage}
                        source={require('./assets/board.png')}/>
                </View>
                <TouchableOpacity onPress={() => this.props.history.push("/play")}>
                    <Text style={styles.startFont}>Tap to Start</Text>
                </TouchableOpacity>
            </View>
        );
    }
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
