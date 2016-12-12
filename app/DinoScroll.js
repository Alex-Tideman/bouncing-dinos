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
        horizontal={horizontal}
        onScroll={() => {
            Animated.spring(this.anim, {
              toValue: 0,   // Returns to the start
              velocity: 2,  // Velocity makes it move
              tension: -5, // Slow
              friction: 1,  // Oscillate a lot
            }).start(); }} >
        <Animated.Image style={[styles.dino, {
              transform: [   // Array order matters
                {scale: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 4],
                })},
                {translateX: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                })},
                {rotate: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    '0deg', `120deg` // 'deg' or 'rad'
                  ],
                })},
              ]}
            ]} source={require('./images/allasaur.jpeg')} />
        <Animated.Image style={[styles.dino, {
              transform: [   // Array order matters
                {scale: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 4],
                })},
                {translateX: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                })},
                {rotate: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    '0deg', `120deg` // 'deg' or 'rad'
                  ],
                })},
              ]}
            ]} source={require('./images/pterodactyl.jpg')} />
        <Animated.Image style={[styles.dino, {
              transform: [   // Array order matters
                {scale: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 4],
                })},
                {translateX: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                })},
                {rotate: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    '0deg', `120deg` // 'deg' or 'rad'
                  ],
                })},
              ]}
            ]} source={require('./images/stegosaurus.jpeg')} />
        <Animated.Image style={[styles.dino, {
              transform: [   // Array order matters
                {scale: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 4],
                })},
                {translateX: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                })},
                {rotate: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    '0deg', `120deg` // 'deg' or 'rad'
                  ],
                })},
              ]}
            ]} source={require('./images/trex.png')} />
        <Animated.Image style={[styles.dino, {
              transform: [   // Array order matters
                {scale: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 4],
                })},
                {translateX: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                })},
                {rotate: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    '0deg', `120deg` // 'deg' or 'rad'
                  ],
                })},
              ]}
            ]} source={require('./images/allasaur.jpeg')} />
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
