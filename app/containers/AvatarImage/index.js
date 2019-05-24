import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
} from 'react-native';
import styles from './styles';

const AvatarImage = ({ url }) => (
  <Image
    style={styles.avatar}
    source={{ uri: url }}
  />
);

AvatarImage.propTypes = {
  url: PropTypes.string.isRequired,
};

export default AvatarImage;
