/* eslint-disable no-unused-vars */
import React from 'react';
import {
  SafeAreaView,
} from 'react-navigation';
import styles from './styles';

const IosStatusBar = props => (
  // when imported into a Fragment pads and styles the status bar.
  <SafeAreaView style={styles.top} />
);

export default IosStatusBar;
