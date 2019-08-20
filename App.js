import React, { Component } from 'react';
import {
 Platform, StyleSheet, Text, View
 } from 'react-native';
import AppNavigator from './src/navigators/AppNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attemptedAutoSignIn: false,
    };
  }

  render() {
    return (
      <AppNavigator signedIn={true} wasLoggedIn={false} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
