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
    // source is either passed as a prop or defaulted to default image.
    // eslint-disable-next-line global-require
    source={url ? { uri: url } : require('../../../assets/images/pixabayLogo.png')}
  />
);

export default AvatarImage;
