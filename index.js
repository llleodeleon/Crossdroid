/* @flow */
import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Animated, Dimensions} from 'react-native';

class App extends React.Component {


  constructor() {
    super()
    this.state = {
      y: new Animated.Value(-Dimensions.get("window").height), 
      onTop: true
    }
  }

  componentWillMount(){
    const endValue = 0
    this.setState({
      onTop: true
    })
    Animated.spring(
      this.state.y, {
        toValue: endValue
      }
    ).start()
  }

  render() {
    return (
      <Animated.View style={styles.container} >
        <Text style={styles.hello}>Hello, World</Text>
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
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