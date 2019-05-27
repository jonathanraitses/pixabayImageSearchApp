// Not using at the moment.
import React from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';

const ListFooter = () => (
  <View style={styles.footer}>
    <ActivityIndicator animating size="large" />
  </View>
);

export default ListFooter;
