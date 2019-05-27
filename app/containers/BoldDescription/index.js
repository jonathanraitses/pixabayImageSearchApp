import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles';

// eslint-disable-next-line react/prop-types
const BoldDescription = ({ topic, description }) => (
  <View style={styles.descriptionContainer}>
    <Text style={styles.topic}>{`${topic}: `}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

export default BoldDescription;
