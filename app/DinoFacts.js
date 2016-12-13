import React, { Component } from 'react';
import { 
  Dimensions,
  StyleSheet,
  Text, View, TouchableHighlight,
  Navigator
} from 'react-native';

export class DinoFacts extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.props.title}</Text>
        <Text>Whooo learning about dinos</Text>
      </View>
    )
  }
}


let { height, width } = Dimensions.get(`window`);

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    width: width,
  },
  navBar: {
    backgroundColor: '#1d9758',
    borderBottomColor: '#1d9758',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    width: width,
  },
  prevButton: {
    marginLeft: 20,
  },
  nextButton: {
    marginRight: 20,
  },
  dinoHeader: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
  dinoFacts: {
    marginTop: 100,
    alignItems: 'center',
  },
  navLink: {
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 50,
    color: '#1d9758'
  },
})

