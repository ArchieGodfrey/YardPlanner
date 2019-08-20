interface ScreenList {
  Splash: any,
  Dashboard: any,
  Planner: any,
  Profile: any,
  Stable: any,
  HorseProfile: any,
  Services: any,
  Service: any,
}

export const SCREEN_COMPONENT = {
  Splash: require('./Splash').default,
  Dashboard: require('./Dashboard').default,
  Planner: require('./Planner').default,
  Profile: require('./Profile').default,
  Stable: require('./Stable').default,
  HorseProfile: require('./HorseProfile').default,
  Services: require('./Services').default,
  Service: require('./Service').default,
};

//@ts-ignore
export let SCREEN_NAME : ScreenList = {};

Object.keys(SCREEN_COMPONENT).forEach((val) => {
  SCREEN_NAME[val] = SCREEN_COMPONENT[val].info.name;
});

export const STACKS = {
  AuthenNavigation: 'AuthenNavigation',
  MainNavigation: 'MainNavigation',
};