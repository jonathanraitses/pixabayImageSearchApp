import React from 'react';
import {
  View,
} from 'react-native';
import BoldDescription from '../../BoldDescription';
import styles from './styles';

// eslint-disable-next-line react/prop-types
const ItemDescription = ({ views, likes }) => (
  <View style={styles.itemDescriptionContainer}>
    <BoldDescription topic="Total Views" description={views} />
    <BoldDescription topic="Total Likes" description={likes} />
  </View>
);

export default ItemDescription;
