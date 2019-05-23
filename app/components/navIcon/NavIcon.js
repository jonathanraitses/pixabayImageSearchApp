import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NavIcon = ({ name, ...props }) => (
  <Icon
    name={Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`}
    {...props}
  />
);

// Not compatible with styles, so no styles.js file
export default NavIcon;
