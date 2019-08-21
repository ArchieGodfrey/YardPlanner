import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
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

const temp = [
  {
    name: 'Bean',
    status: 'In stable'
  },
  {
    name: 'Fred',
    status: 'In field'
  }
]

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
        <Text style={styles.header}>Stable</Text>
          <View style={styles.details}>
            <Text style={styles.body}>My Horses</Text>
            <FlatList
              style={styles.list}
              data={temp}
              renderItem={item => <Text onPress={() => navigation.navigate('HorseProfile', horseData)} style={styles.listItem}>{item.item.name}                 <Text style={styles.listItem}>{item.item.status}</Text></Text>}
            />
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
  details: {
    flex: 1,
    marginHorizontal: '5%',
  },
  header: {
    color: Colors.Black,
    fontSize: FontSizes.Title,
    margin: '5%',
  },
  body: {
    color: Colors.Black,
    fontSize: FontSizes.Medium,
  },
  status: {
    color: Colors.Black,
    fontSize: FontSizes.Huge,
    fontFamily: Fonts.Book,
    margin: '5%',
  },
  list: {
    width: '90%',
    height: '10%',
  },
  listItem: {
    color: Colors.Black,
    backgroundColor: Colors.Grey,
    borderRadius: 20,
    width: '100%',
    fontSize: FontSizes.Medium,
    margin: '5%',
  },
});

export default Stable
