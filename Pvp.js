import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import {MaterialCommunityIcons as Icon} from "react-native-vector-icons";
import TouchableHighlight from "react-native-web/dist/exports/TouchableHighlight";

export default class Pvp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameState: [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            currentPlayer: 1,
            currentPlayerName: "It is Player 1's turn",
            counter: 1,
        }
    }

    componentDidMount() {
        this.initializeGame();
    }

    initializeGame = () => {
        this.setState({
            gameState: [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ]
        })
    };
    checkPlayerTurn = () => {
        //This initilizes where it originally has Player 1 go twice. Thus I have to reverse the values so that way
        //player 1 and player 2 alternate.
        if (this.state.counter % 2) {
            this.state.currentPlayerName = "It is Player 1's turn"
        }
        else {
            this.state.currentPlayerName = "It is Player 2's turn"
        }
    };
    playerPress = (row, col) =>{
        //Makes tile not change symbol
        let contain = this.state.gameState[row][col];
        if (contain !== 0) {
            return null;
        }
        //Check current player
        let currentPlayer = this.state.currentPlayer;
        //Change tile to player's symbol
        let board = this.state.gameState.slice();
        board[row][col] = currentPlayer;
        this.setState({gameState: board});

        //Change to next player
        let nextPlayer = (currentPlayer === 1) ? -1 : 1;
        this.setState({currentPlayer: nextPlayer});
        //Checks whose turn it is
        this.state.counter++;
        this.checkPlayerTurn();
        //Check for winner
        let winner = this.getWinner();
        if (winner === 1) {
            Alert.alert("Player 1 won");
            this.initializeGame();
        }
        else if (winner === -1) {
            Alert.alert("Player 2 won");
            this.initializeGame();
        }
        //Really bad way to check if board is full with no winners
        if (winner === 0 && board[0][0] !== 0 && board[0][1] !== 0 &&
            board[0][2] !== 0 && board[1][0] !== 0 && board[1][1] !== 0 &&
            board[1][2] !== 0 && board[2][0] !== 0 && board[2][1] !== 0 &&
            board[2][2] !== 0) {
            Alert.alert("Tie");
            this.initializeGame();
        }
    };
    renderIcon = (row, col) => {
        let value = this.state.gameState[row][col];
        switch (value) {
            case 1:
                return <Icon name="close" style={styles.xIcon}/>;
            case -1:
                return <Icon name="radiobox-blank" style={styles.oIcon}/>
            default:
                return <View />
        }
    };

    getWinner = () => {
        let board = this.state.gameState;
        let total = 0;

        for (let i = 0; i < 3; i++) {
            total = board[i][0] + board[i][1] + board[i][2];
            if (total === 3) {
                return 1;
            }
            else if (total === -3) {
                return -1;
            }
        }
        for (let i = 0; i < 3; i++) {
            total = board[0][i] + board[1][i] + board[2][i];
            if (total === 3) {
                return 1;
            }
            else if (total === -3) {
                return -1;
            }
        }
        total = board[0][0] + board[1][1] + board[2][2];
        if (total === 3) {
            return 1;
        }
        else if (total === -3) {
            return -1;
        }
        total = board[2][0] + board[1][1] + board[0][2];
        if (total === 3) {
            return 1;
        }
        else if (total === -3) {
            return -1;
        }
        return 0;
    };

    render() {
        const history = this.props;
        return (
            <View style={styles.backgroundColor}>
                <View>
                    <TouchableOpacity onPress = {() => this.props.history.push("/play")}>
                        <Image style={styles.arrow}
                               source={require("./assets/Arrow.png")}/>
                    </TouchableOpacity>
                    <Text style={styles.titleBar}>Who will Prevail?</Text>
                    <Text style ={styles.titleBar}>{this.state.currentPlayerName}</Text>
                </View>
                <View style={styles.tileColumn}>
                    <View style={styles.tileRow}>
                        <TouchableOpacity onPress = {() => this.playerPress(0,0)}
                                          style = {[styles.tile, {borderTopWidth: 0, borderLeftWidth: 0}]}>
                            {this.renderIcon(0,0)}
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => this.playerPress(0,1)}
                                          style = {[styles.tile, {borderTopWidth: 0}]}>
                            {this.renderIcon(0,1)}
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => this.playerPress(0,2)}
                                          style = {[styles.tile, {borderTopWidth: 0, borderRightWidth: 0}]}>
                            {this.renderIcon(0,2)}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tileRow}>
                        <TouchableOpacity onPress = {() => this.playerPress(1,0)}
                                          style = {[styles.tile, {borderLeftWidth: 0}]}>
                            {this.renderIcon(1,0)}
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => this.playerPress(1,1)}
                                          style = {styles.tile}>
                            {this.renderIcon(1,1)}
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => this.playerPress(1,2)}
                                          style = {[styles.tile, {borderRightWidth: 0}]}>
                            {this.renderIcon(1,2)}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tileRow}>
                        <TouchableOpacity onPress = {() => this.playerPress(2,0)}
                                          style = {[styles.tile, {borderBottomWidth: 0, borderLeftWidth: 0}]}>
                            {this.renderIcon(2,0)}
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => this.playerPress(2,1)}
                                          style = {[styles.tile, {borderBottomWidth: 0}]}>
                            {this.renderIcon(2,1)}
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => this.playerPress(2,2)}
                                          style = {[styles.tile, {borderBottomWidth: 0, borderRightWidth: 0}]}>
                            {this.renderIcon(2,2)}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundColor: {
        flex: 1,
        backgroundColor: "#85C8B0"
    },
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
        marginBottom: 30
    }
    ,
    tile: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 5,
        width: 125,
        height: 125
    },
    tileRow: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    tileColumn: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    xIcon: {
        fontSize: 80,
        color:"#B80F0A"
    },
    oIcon: {
        fontSize: 80,
        color:"#00468B"
    }
});
