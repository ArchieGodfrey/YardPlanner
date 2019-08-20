import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView,
  Linking,
  Image
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Colors, FontSizes, Fonts } from '../config';
import { connect } from 'react-redux';
import { isLoggedIn, } from '../services/session/selectors';
import * as session from '../services/session';
import { SCREEN_NAME } from '../screens/index';

export interface Props {
  navigation: any,
  [key: string]: any,
}

interface State {
  completed: boolean
}


class DrawerMenu extends Component<Props, State> {
  constructor(props){
    super(props)
    this.state = {
      completed: false,
    }
    this.logout = this.logout.bind(this);
  }

  navigateToScreen = route => () => {
    const { navigation } = this.props;
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    navigation.closeDrawer()
    navigation.dispatch(navigateAction);
  }

  logout() {
    session.clearSession()
    this.props.navigation.navigate('AuthenNavigation')
    this.props.navigation.navigate(SCREEN_NAME.Dashboard)
  }

  render() {
    const { navigation, loggedIn } = this.props;
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.top}>
            <Image
              style={styles.logo}
              source={require('../images/apple-pay.png')}
            />
            <TouchableWithoutFeedback
              onPress={() => navigation.closeDrawer()}
            >
              <Image 
                style={styles.close}
                source={require('../images/grey-close.png')}
                
              />
            </TouchableWithoutFeedback>
          </View>
          <TouchableWithoutFeedback
            onPress={this.navigateToScreen('Dashboard')}
          >
            <View style={styles.item}>
              <Text style={styles.text}>
                Home
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={this.logout}
          >
            <View style={styles.item}>
              <Text style={styles.text}>
                Log out
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 40,
  },
  logo: {
    width: 100,
    height: 40,
  },
  close: {
    width: 20,
    height: 20,
  },
  item: {
    paddingLeft: 40,
    paddingVertical: 15,
  },
  text: {
    fontSize: FontSizes.Large,
    color: Colors.Purple,
    fontWeight: 'bold',
    fontFamily: Fonts.Black,
  },
});

export default connect(() => ({
  loggedIn: isLoggedIn(),
}))(DrawerMenu);

