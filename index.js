/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App.tsx';

AppRegistry.registerComponent(Platform.OS === 'ios' ? 'YardPlanner' : appName, () => App);
