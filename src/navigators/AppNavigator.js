import { createStackNavigator, createAppContainer } from 'react-navigation';

import Dashboard from '../screens/Dashboard';
  
const AppNavigator = createStackNavigator({
    Dashboard: {
      screen: Dashboard
    }
  });
  
  export default createAppContainer(AppNavigator);