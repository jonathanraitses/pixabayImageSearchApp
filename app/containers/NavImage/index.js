import React from 'react';
import {
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import NavigationService from '../../modules/NavigationService';
import styles from './styles';

// eslint-disable-next-line react/prop-types
const NavImage = ({ image, screen, func }) => (
  <TouchableOpacity
    onPress={
        () => {
        // optional function that will run on press from props before navigation
          if (func !== undefined) {
            func();
            NavigationService.navigate(screen);
          } else {
            NavigationService.navigate(screen);
          }
        }}
  >
    <Image
      style={styles.itemImage}
      source={{ uri: image }}
    />
  </TouchableOpacity>
);

NavImage.propTypes = {
  screen: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default NavImage;
