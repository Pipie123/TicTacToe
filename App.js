import React from 'react';
import {Animated, StyleSheet, Text, View, Image } from 'react-native';
import {Button} from "react-native-web";


export default function App() {

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
        </View>
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
    paddingTop: 100,
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
    paddingBottom: 100,
    maxHeight: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introImage: {
    width: 375,
    height: 125
  },
});


