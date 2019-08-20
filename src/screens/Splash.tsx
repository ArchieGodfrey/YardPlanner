import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../config';
import { SCREEN_NAME } from '../screens/index';

export interface Props {
  navigation: any,
  signedIn: boolean,
  [key: string]: any,
}

class Splash extends Component<Props> {
  static info = {
    name: 'Splash'
  };

  componentDidMount() {
    this.props.navigation.navigate(SCREEN_NAME.Dashboard);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.BlackMatteL2, justifyContent: 'center', alignItems: 'center' }} />
    );
  }
}
export default Splash;