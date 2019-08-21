import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
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

interface State {
  viewHeight: any,
}

const rugImages = [1,2,3]

class HorseProfile extends Component<Props, State> {
  constructor(props){
    super(props)
    this.state = {
      viewHeight: new Animated.Value(Dimensions.get('window').height * 0.9),
    }
  }

  static info = {
    name: 'HorseProfile'
  };

  toggleDetailView() {
    const { viewHeight } = this.state;
    console.log(viewHeight)
    if (viewHeight._value > Dimensions.get('window').height * 0.4) {
      Animated.timing(                  
        viewHeight,            
        {
          toValue: Dimensions.get('window').height * 0.4,                   
          duration: 1000,              
        }
      ).start(); 
    } else {
      Animated.timing(                  
        viewHeight,            
        {
          toValue: Dimensions.get('window').height * 0.9,                   
          duration: 1000,              
        }
      ).start(); 
    }
  }

  render() {
    const { viewHeight } = this.state;
    const { navigation } = this.props;
    const { params } = navigation.state;
    return (
      <SafeAreaView style={styles.container}>
        <Header
            navigation={navigation}
            banner
        />
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.header}>{params.Name}</Text>
          <Image
            style={styles.profilePicture}
            source={require('../images/horseProfilePic.jpg')}
          />
          <Text style={styles.status}>{params.Status}</Text>
          <View style={styles.details}>
            <Text style={styles.body}>Upcoming Services:</Text>
            <FlatList
              style={styles.list}
              data={params.Services}
              renderItem={item => <Text style={styles.listItem}>{item.item.Type}</Text>}
            />
          </View>
          <View>
          </View>
        </ScrollView>
        <Animated.View style={[styles.detailsView, {top: viewHeight}]} >
            <Text onPress={() => this.toggleDetailView()} style={styles.header}>Details</Text>
            <Text style={styles.body}>Feed</Text>
              <FlatList
                style={styles.list}
                data={params.Food}
                renderItem={item => <Text style={styles.listItem}>{item.item}</Text>}
              />
              <Text style={styles.body}>Rugs</Text>
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
          </Animated.View>
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
  detailsView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.DarkGrey,
    borderRadius: 150,
    alignItems: 'center',
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
  profilePicture: {
    width: 300,
    height: 300,
    borderRadius: 30,
    resizeMode: 'cover',
  },
  list: {
    width: '90%',
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
