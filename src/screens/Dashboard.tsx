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
import { Colors, FontSizes, Fonts } from '../config';

export interface Props {
  navigation: any,
  [key: string]: any,
}

class Dashboard extends Component<Props> {
  static info = {
    name: 'Dashboard'
  };
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
      <Header
          navigation={navigation}
          banner
        />
        <Text>Dashboard</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BlueGrey,
  },
});

export default Dashboard
