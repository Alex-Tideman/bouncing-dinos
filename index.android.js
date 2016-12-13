import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import {
  Text,
  View
} from 'react-native';

class App extends Component {
  render() {
    return (
      <Text style={styles.hello}>Hello World</Text>
    );
  }
}

const styles = StyleSheet.create({
  hello: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    top: 200,
  }
})

AppRegistry.registerComponent('BouncingDinos', () => App);
