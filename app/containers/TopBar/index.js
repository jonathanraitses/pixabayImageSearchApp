import React, { Fragment } from 'react';
import { Platform } from 'react-native';
import IosSafeView from '../IosSafeView';
import AndroidStatusBar from '../AndroidStatusBar';

// black line seperator for FlatList
const TopBar = () => {
  const os = Platform.OS;

  return (
    <Fragment>
      {
        os === 'ios' ? <IosSafeView /> : <AndroidStatusBar />
      }
    </Fragment>
  );
};

export default TopBar;
