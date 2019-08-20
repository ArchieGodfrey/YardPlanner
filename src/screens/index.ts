interface ScreenList {
  Splash: any,
  Dashboard: any,
}

export const SCREEN_COMPONENT = {
  Splash: require('./Splash').default,
  Dashboard: require('./@Dashboard').default,
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