import { Dimensions } from 'react-native'
import { createDrawerNavigator } from 'react-navigation';
import { SCREEN_COMPONENT, SCREEN_NAME } from '../screens/index';
import DrawerMenu from '../components/DrawerMenu';

const getStackScreen = (firstScreenName: any) => {
  return createDrawerNavigator({
    [SCREEN_NAME.Dashboard]: SCREEN_COMPONENT.Dashboard,
    [SCREEN_NAME.HorseProfile]: SCREEN_COMPONENT.HorseProfile,
    [SCREEN_NAME.Planner]: SCREEN_COMPONENT.Planner,
    [SCREEN_NAME.Profile]: SCREEN_COMPONENT.Profile,
    [SCREEN_NAME.Service]: SCREEN_COMPONENT.Service,
    [SCREEN_NAME.Services]: SCREEN_COMPONENT.Services,
    [SCREEN_NAME.Stable]: SCREEN_COMPONENT.Stable,
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