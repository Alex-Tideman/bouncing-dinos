import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app/App';

class Main extends Component{
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('BouncingDinos', () => Main);