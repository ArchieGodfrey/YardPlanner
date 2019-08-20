import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  WebView,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Header from '../components/Header';

export interface Props {
  navigation: any,
  [key: string]: any,
}

class Service extends Component<Props> {
  static info = {
    name: 'Service'
  };
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
      <Header
          navigation={navigation}
          banner
        />
        <Text>Service</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Service
