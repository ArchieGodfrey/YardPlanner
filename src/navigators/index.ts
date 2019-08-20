import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { STACKS } from '../screens/index';

import MainStack from './MainStack';
import AuthenStack from './AuthenStack';

const SwitchNavigation =  createSwitchNavigator({
  [STACKS.AuthenNavigation]: AuthenStack,
  [STACKS.MainNavigation]: MainStack,
});

const AppContainer = createAppContainer(SwitchNavigation);

export default AppContainer;