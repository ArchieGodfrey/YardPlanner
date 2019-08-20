import { createStackNavigator } from 'react-navigation';

import { SCREEN_COMPONENT, SCREEN_NAME } from 'screens';

export default createStackNavigator({
  [SCREEN_NAME.Splash]: SCREEN_COMPONENT.Splash,
  [SCREEN_NAME.Dashboard]: SCREEN_COMPONENT.Dashboard,
}, {
  headerMode: 'none',
});