import { STACKS } from '../screens/index';
import { NavigationActions } from 'react-navigation';

class NavigationManager {
  
  prevState;
  newState;

  nav;

  initHooks = (prevState, newState) => {

    this.prevState = prevState;
    this.newState = newState;

    // code your hook here
    
  }

  initNav = nav => {
    this.nav = nav;
  }

  findRouteName = (name, navState) => {
    if (navState.routeName === name) return { success: true, navState };
    if (!navState.routes) return { success: false };
    for (let i=0; i < navState.routes.length; i++) {
      const eachResult = this.findRouteName(name, navState.routes[i]);
      if (eachResult.success) return { success: true, navState: eachResult.navState };
    }
    return { success: false };
  }

  isMainStackActiveScreen = (screenName) => {
    if (!this.newState) return false;
    const mainStack = this.findRouteName(STACKS.MainNavigation, this.newState);
    if (!mainStack.success) return false;
    return mainStack.navState.routes[mainStack.navState.routes.length - 1].routeName === screenName;
  }

  mainStackPush = (screenName) => {
    if (!this.nav) return;
    this.nav.dispatch(NavigationActions.navigate({ routeName: screenName }))
  }
}

export default new NavigationManager();