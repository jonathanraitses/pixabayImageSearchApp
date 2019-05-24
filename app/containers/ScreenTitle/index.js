import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
} from 'react-native';
import styles from './styles';

// Title that can be put on the top of a screen to describe it.
const ScreenTitle = ({ text }) => (
  <View style={styles.title}>
    <Text style={styles.header}>{text}</Text>
  </View>
);

ScreenTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ScreenTitle;
