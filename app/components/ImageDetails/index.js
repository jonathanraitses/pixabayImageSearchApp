import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
} from 'react-native';
import NavigationService from '../../modules/NavigationService';
import GlobalContext from '../../contexts/GlobalContext';
import styles from './styles';

const ImageDetails = (props) => {
    const { state } = useContext(GlobalContext);

  return (
    <View style={styles.descriptionContainer}>
        <Text style={styles.header}>{text}</Text>
    </View>
  );
};

ImageDetails.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ImageDetails;
