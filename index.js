/* @flow */
import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.hello}>Hello, World</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
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