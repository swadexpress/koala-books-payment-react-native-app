/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import { applyPolyfills, defineCustomElements } from 'pixobe-coloring-book/loader';

applyPolyfills().then(() => {
  defineCustomElements();
});

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => require('./service'));
