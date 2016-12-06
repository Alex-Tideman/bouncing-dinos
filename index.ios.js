
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Switch, Navigator } from 'react-native';
import { DinoScroll } from './app/DinoScroll';

class Main extends Component {

  state = {
    horizontalIsOn: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to Bouncing Dinos!</Text>
        <Text>Scroll Horizontal</Text>
        <Switch
          onValueChange={(value) => this.setState({horizontalIsOn: value})}
          style={{marginBottom: 10}}
          value={this.state.horizontalIsOn} />
        <DinoScroll horizontal={this.state.horizontalIsOn} />
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
  },
  header: {
    fontSize: 24,
    fontWeight: '100',
    textAlign: 'center',
    marginBottom: 25,
  },
  dinoList: {
    marginBottom: 25,
  },
})

AppRegistry.registerComponent('BouncingDinos', () => Main);
