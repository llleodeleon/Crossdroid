/* @flow */
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Animated, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';

const anim = require('./assets/loading_popcorn.json') ;

class App extends Component {

  constructor() {
    super()
    // this.state = {
    //   y: new Animated.Value(-Dimensions.get("window").height), 
    //   onTop: true
    // }
  }

  componentDidMount() {
    console.warn(this.animation)
    this.animation.play();
  }

  // componentWillMount(){
  //   const endValue = 0
  //   this.setState({
  //     onTop: true
  //   })
  //   Animated.spring(
  //     this.state.y, {
  //       toValue: endValue
  //     }
  //   ).start()
  // }

  render() {
    return (
      <View style={styles.container} >
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            source={anim}
            loop={true}
            style={{
              width: 100,
              height: 100
            }}
          />
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