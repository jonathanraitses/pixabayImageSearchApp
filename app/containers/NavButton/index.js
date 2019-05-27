import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import NavigationService from '../../modules/NavigationService';
import styles from './styles';

// eslint-disable-next-line react/prop-types
const NavButton = ({ text, screen, promise }) => (
  <TouchableOpacity
    style={styles.touchable}
    onPress={
      () => {
        // optional promise run on press from props before navigation
        if (promise !== undefined) {
          promise()
            .then(() => {
              NavigationService.navigate(screen);
            })
            .catch((err) => {
              throw new Error('Error in promise before NavButton redirect: ', err);
            });
        } else {
          NavigationService.navigate(screen);
        }
      }
    }
  >
    {/* styling goes into text */}
    <Text style={styles.text}>
      {text}
    </Text>
  </TouchableOpacity>
);

NavButton.propTypes = {
  screen: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavButton;
