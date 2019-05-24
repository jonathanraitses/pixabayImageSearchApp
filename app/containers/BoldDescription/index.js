import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles';

const BoldDescription = ({ topic, description }) => (
  <View style={styles.descriptionContainer}>
    <Text style={styles.topic}>{`${topic}: `}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

BoldDescription.propTypes = {
  topic: PropTypes.string.isRequired,
};

export default BoldDescription;
