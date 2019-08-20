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

class Stable extends Component<Props> {
  static info = {
    name: 'Stable'
  };
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
      <Header
          navigation={navigation}
          banner
        />
        <Text>Stable</Text>
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

export default Stable
