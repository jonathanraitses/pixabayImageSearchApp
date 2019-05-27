import React from 'react';
import {
  Image,
} from 'react-native';
import styles from './styles';

// takes image and adds borderRadius based on scale
// eslint-disable-next-line react/prop-types
const AvatarImage = ({ url }) => (
  <Image
    style={styles.avatar}
    source={{ uri: url }}
  />
);

export default AvatarImage;
