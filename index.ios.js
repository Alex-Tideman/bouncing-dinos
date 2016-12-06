
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Home } from './app/Home';

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home style={styles.home} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 50,
  }
})

AppRegistry.registerComponent('BouncingDinos', () => Main);
