import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Animated
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export class DinoScroll extends Component {
  state = {count: 0}

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  render() {
    const {count} = this.state
    const {horizontal} = this.props
    this.anim = this.anim || new Animated.Value(0);
    return (
      <ScrollView
        horizontal={horizontal} >
        <Animatable.Image animation="zoomInUp" style={[styles.dino]} source={require('./images/allasaur.jpeg')} />
        <Animatable.Image animation="zoomInUp" delay={500} style={[styles.dino]} source={require('./images/pterodactyl.jpg')} />
        <Animatable.Image animation="zoomInUp" delay={1000}style={[styles.dino]} source={require('./images/stegosaurus.jpeg')} />
        <Animatable.Image animation="zoomInUp" delay={1500} style={[styles.dino]} source={require('./images/trex.png')} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  dino: {
    padding: 20,
    height: 220,
    width: 250,
    shadowColor: '#000',
    shadowRadius: 5,
  }
})
