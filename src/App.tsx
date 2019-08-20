import React, {Component} from 'react';
import { store, persistor } from './store';
import {
  StatusBar,
  StyleSheet,
  View,
  Platform
} from "react-native";
import {
  connect,
  Provider,
} from 'react-redux';

import SplashScreen from 'react-native-splash-screen';

import { PersistGate } from 'redux-persist/integration/react';
import AppNavigation from './navigators'
import NavigationManager from './navigators/manager';
import { Colors } from "./config";

import { isLoggedIn } from './services/session/selectors';


class AppContainer extends Component {

  componentDidMount() {
    Platform.OS === 'android' && SplashScreen.hide();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <StatusBar backgroundColor={Colors.Grey} barStyle="dark-content"/>
          <AppNavigation
            ref={nav => {
              NavigationManager.initNav(nav);
            }}
            onNavigationStateChange={(prevState, newState) => {
              NavigationManager.initHooks(prevState, newState);
            }}
          />
        </View>
      </View>
    );
  }
}

const WrappedAppContainer = connect(() => ({
  loggedIn: isLoggedIn(),
}))(AppContainer);

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <WrappedAppContainer />
    </PersistGate>
  </Provider>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  }
});

export default App;
