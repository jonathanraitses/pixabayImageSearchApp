import React from 'react';
import {
  View,
} from 'react-native';
import BoldDescription from '../../BoldDescription';
import styles from './styles';

// eslint-disable-next-line react/prop-types
const ListHeader = ({ totalHits }) => (
  <View style={styles.header}>
    <BoldDescription topic="Results" description={totalHits} />
  </View>
);

export default ListHeader;
