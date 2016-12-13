import React, { Component } from 'react';
import { 
  StyleSheet,
  Text, View, Switch, TouchableHighlight
} from 'react-native';
import { DinoScroll } from './DinoScroll';


export default class App extends Component {

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
      justifyContent: 'flex-start',
      alignItems: 'center',
      top: 50,
    },
    header: {
      fontSize: 24,
      fontWeight: '900',
      textAlign: 'center',
      marginBottom: 5,
    },
    dinoList: {
      padding: 5,
    },
})

