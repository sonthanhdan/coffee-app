/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/app/App';

export default class CoffeeApp extends Component {
  render() {
    return (
     <App />
    );
  }
}



AppRegistry.registerComponent('CoffeeApp', () => CoffeeApp);
