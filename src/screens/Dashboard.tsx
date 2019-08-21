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
        <Text style={styles.header}>Dashboard</Text>
        <View style={styles.bubble}>
          <Text style={styles.body}>An app to help manage horses on a yard. Keep track of which horses need to go out and which are out, what their rugs and headcollars look like and what their feed is</Text>
        </View>
        <View style={styles.bubble}>
          <Text style={styles.body}>Different accounts for staff and members to maintain security on the yard and unauthoriesed edits</Text>
        </View>
        <View style={styles.bubble}>
          <Text style={styles.body}>Keep a receipt of all services that are performed for each member to correctly and easily charge</Text>
        </View>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BlueGrey,
  },
  bubble: {
    width: '90%',
    height: '20%',
    backgroundColor: Colors.LightPurple,
    margin: '5%',
    padding: '2%',
    borderRadius: 20,
  },
  header: {
    color: Colors.Black,
    fontSize: FontSizes.Title,
  },
  body: {
    color: Colors.Black,
    fontSize: FontSizes.Medium,
  },
});

export default Dashboard
