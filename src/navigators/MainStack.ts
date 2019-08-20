import { Dimensions } from 'react-native'
import { createDrawerNavigator } from 'react-navigation';
import { SCREEN_COMPONENT, SCREEN_NAME } from 'screens';
import DrawerMenu from '../components/DrawerMenu';

const getStackScreen = (firstScreenName: any) => {
  return createDrawerNavigator({
    [SCREEN_NAME.Dashboard]: SCREEN_COMPONENT.Dashboard,
  }, {
    drawerWidth: Dimensions.get('screen').width,
    //@ts-ignore
    headerMode: 'none',
    drawerPosition: 'right',
    //@ts-ignore
    contentComponent: DrawerMenu,
  });
}

export default getStackScreen(SCREEN_NAME.Splash);