import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { DrawerActions } from 'react-navigation';
import { Colors, FontSizes } from 'config';

export interface Props {
  navigation: any,
  burgerColor?: any,
  [key: string]: any,
}

class Header extends Component<Props> {
  render() {
    const {
      navigation,
      burgerColor,
      banner,
      additionalButton,
      additionalImage,
    } = this.props;

    return (
      <View style={styles.container}>
        <Image
          style={banner ? styles.logoBanner : styles.logo}
          source={ require('../images/apple-pay.png') }
        />
        <View style={styles.expand}/>
        {additionalButton != undefined &&
        <TouchableWithoutFeedback
            onPress={additionalButton}
            style={[styles.burgerBun]}
          >
            <Image 
              source={additionalImage} 
              style={[styles.burger, {marginRight: 40}]} 
            />
        </TouchableWithoutFeedback>}
        <TouchableWithoutFeedback
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={styles.burgerBun}
        >
          <Image 
            source={burgerColor === "white" ? require('../images/ham-white.png') : require('../images/ham-black.png')} 
            style={[styles.burger]} 
          />
        </TouchableWithoutFeedback>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  logo: {
    width: 85,
    height: 40,
    resizeMode: 'contain',
  },
  logoBanner: {
    position: 'absolute',
    width: 150,
    resizeMode: 'contain',
    left: -10,
  },
  expand: {
    flexGrow: 2,
  },
  burgerBun: {
    alignSelf: 'flex-end',
  },
  burger: {
    width: 30,
    resizeMode: 'contain',
  },
});

export default Header;
