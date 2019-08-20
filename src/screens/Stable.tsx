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

const horse = {
  Name:	String,
  Status: String,
  Services:	Array,
  Food:	String,
  Rugs:	Array,
  Headcollars: Array,
  Image: String,
  ID:	String
}

const service = {
  Type:	String,
  TimeOfDay:	String,
  AdditionalRequests:	String,
  Date:	Date,
  ID:	String,
}

const serviceData1 = {
  Type:	'Bring-In',
  TimeOfDay:	'Morning',
  AdditionalRequests:	'Put black rug on',
  Date:	new Date(),
  ID:	'1',
}
const serviceData2 = {
  Type:	'Bring-In',
  TimeOfDay:	'Morning',
  AdditionalRequests:	'Put black rug on',
  Date:	new Date(),
  ID:	'2',
}

const horseData = {
  Name:	'Bean',
  Status: 'In stable',
  Services:	[serviceData1, serviceData2],
  Food:	["Some feed type","some other feed type"],
  Rugs:	'Picture',
  Headcollars: 'Picture',
  Image: 'Picture',
  ID:	'1',
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
        <Text>List of horses</Text>
        <Text onPress={() => navigation.navigate('HorseProfile', horseData)}>Horse - Status</Text>
        <Text>Horse - Status</Text>
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

export default Stable
