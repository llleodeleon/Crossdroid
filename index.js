/* @flow */
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Animated, Dimensions} from 'react-native';

export default class App extends Component {

  componentDidMount() {
    // this.animation.play()
  }

  render() {
    return (
      <View style={styles.container} >
    
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#29364B",
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('RNCrossdroid', () => App);