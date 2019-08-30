/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App.tsx';

require("babel-core/register");
require("babel-polyfill");

AppRegistry.registerComponent(Platform.OS === 'ios' ? 'YardPlanner' : appName, () => App);
