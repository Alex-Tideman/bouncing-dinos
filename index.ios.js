
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Switch, Navigator } from 'react-native';
import { Home } from './app/Home';

class Main extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 100,
  }
})

AppRegistry.registerComponent('BouncingDinos', () => Main);
