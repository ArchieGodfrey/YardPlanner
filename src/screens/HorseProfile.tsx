import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Header from '../components/Header';
import { Colors, FontSizes, Fonts } from '../config';
import { ScrollView } from 'react-native-gesture-handler';

export interface Props {
  navigation: any,
  params: any,
  [key: string]: any,
}

const rugImages = [1,2,3]

class HorseProfile extends Component<Props> {
  static info = {
    name: 'HorseProfile'
  };
  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    return (
      <SafeAreaView style={styles.container}>
        <Header
            navigation={navigation}
            banner
        />
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.name}>{params.Name}</Text>
          <Image
            style={styles.profilePicture}
            source={require('../images/horseProfilePic.jpg')}
          />
          <Text style={styles.status}>{params.Status}</Text>
          <View style={styles.details}>
            <Text>Upcoming Services:</Text>
            <FlatList
              style={styles.list}
              data={params.Services}
              renderItem={item => <Text style={styles.listItem}>{item.item.Type}</Text>}
            />
          </View>
            <Text>Feed</Text>
            <FlatList
              style={styles.list}
              data={params.Food}
              renderItem={item => <Text style={styles.listItem}>{item.item}</Text>}
            />
            <FlatList
              style={styles.photoCarousel}
              horizontal
              data={rugImages}
              renderItem={item => <Image
                style={styles.carouselImage}
                source={require('../images/horseProfilePic.jpg')}
              />}
            />
            <Text>{params.Headcollars}</Text>
          
          <View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.BlueGrey,
  },
  details: {
    flex: 1,
    marginHorizontal: '5%',
  },
  name: {
    color: Colors.Black,
    fontSize: FontSizes.Title,
    margin: '5%',
  },
  status: {
    color: Colors.Black,
    fontSize: FontSizes.Huge,
    fontFamily: Fonts.Book,
    margin: '5%',
  },
  profilePicture: {
    width: 300,
    height: 300,
    borderRadius: 30,
    resizeMode: 'cover',
  },
  list: {
    height: '10%',
  },
  listItem: {
    color: Colors.Black,
    fontSize: FontSizes.Medium,
  },
  photoCarousel: {
    height: '100%',
  },
  carouselImage: {
    width: 200,
    height: 100,
    borderRadius: 30,
    resizeMode: 'cover',
    marginHorizontal: 10,
  }
});

export default HorseProfile
