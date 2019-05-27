import React from 'react';
import {
  StatusBar,
} from 'react-native';
import config from '../../../config';

// styles android status bar as best you can with native modules.
// accepts additional props in ../StatusBar
const AndroidStatusBar = (...props) => (
  <StatusBar
    backgroundColor={config.statusBarColor || 'red'}
    barStyle="light-content"
    {...props}
  />
);

export default AndroidStatusBar;
