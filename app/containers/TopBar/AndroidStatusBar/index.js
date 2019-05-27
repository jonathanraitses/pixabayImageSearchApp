import React from 'react';
import {
  StatusBar,
} from 'react-native';

// styles android status bar as best you can with native modules.
const AndroidStatusBar = (...props) => (
  <StatusBar
    backgroundColor="red"
    barStyle="light-content"
    {...props}
  />
);

// There are no styles for StatusBar, so no importing or styles set.
export default AndroidStatusBar;
