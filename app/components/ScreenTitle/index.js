import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
} from 'react-native';
import styles from './styles';

const ScreenTitle = ({ text }) => (
  <View style={styles.title}>
    <Text style={styles.header}>{text}</Text>
  </View>
);

ScreenTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ScreenTitle;
