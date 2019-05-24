import React from 'react';
import {
  StatusBar,
} from 'react-native';

const AndroidStatusBar = (...props) => (
  <StatusBar
    backgroundColor="red"
    barStyle="light-content"
    {...props}
  />
);

// There are no styles for StatusBar, so no importing or styles set.
export default AndroidStatusBar;
