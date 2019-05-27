import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import NavigationService from '../../modules/NavigationService';
import styles from './styles';

// creates button that navigates to a screen.
const NavButton = ({ screen }) => (
  <TouchableOpacity
    onPress={
      () => {
        NavigationService.navigate(screen);
      }
    }
  >
    {/* styling goes into text */}
    <Text style={styles.button}>
      {`Back to ${screen}`}
    </Text>
  </TouchableOpacity>
);

NavButton.propTypes = {
  screen: PropTypes.string.isRequired,
};

export default NavButton;
