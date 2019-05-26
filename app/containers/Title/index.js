import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
} from 'react-native';
import styles from './styles';

// Title that can be put on the top of a screen to describe it.
const Title = ({ text }) => (
  <Text style={styles.title}>{text}</Text>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
