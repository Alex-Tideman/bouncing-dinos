import React, { Component } from 'react';
import { 
  StyleSheet,
  Text, View, Switch, TouchableHighlight,
  Navigator
} from 'react-native';
import { DinoScroll } from './DinoScroll';
import { DinoFacts } from './DinoFacts';


export class Home extends Component {

  state = {
    horizontalIsOn: false,
  };

  render() {
    return (
      <View>
        <Text>Home Route</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      top: 15,
    },
    navLink: {
      fontSize: 16,
      fontWeight: '900',
      textAlign: 'center',
      marginBottom: 50,
      color: '#1d9758'
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

