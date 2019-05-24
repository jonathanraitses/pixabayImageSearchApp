import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import NavigationService from '../../modules/NavigationService';
import styles from './styles';

const NavButton = ({ location }) => (
  <TouchableOpacity
    onPress={
      () => {
        NavigationService.navigate('Results');
      }
    }
  >
    {/* styling goes into text */}
    <Text style={styles.button}>
      {`Back to ${location}`}
    </Text>
  </TouchableOpacity>
);

NavButton.propTypes = {
  location: PropTypes.string.isRequired,
};

export default NavButton;
