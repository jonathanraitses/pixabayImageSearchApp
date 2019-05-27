import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import NavigationService from '../../../modules/NavigationService';
import GlobalContext from '../../../contexts/GlobalContext';
import styles from './styles';

// Easily refactorable to pass more props and determine where to query
const SearchButton = ({ title }) => {
  const { state, updateKey } = useContext(GlobalContext);

  return (
    // onPress takes data generated from TextInput in state and
    // queries pixabay using function in provider
    <TouchableOpacity
      style={styles.touchable}
      onPress={
        () => {
          state.queryPixabay(state.query)
            .then((res) => {
              // could check values befoe reset incase it does not need to be reset
              // reset to page 1
              updateKey('page', 1);
              // reset selected image
              updateKey('selectedImage', null);
              // store image objects
              updateKey('docs', res.data.hits);
              // total images that match (capped at 500 for free API account)
              updateKey('totalHits', res.data.totalHits);
              // navigates to results once docs are in state
              NavigationService.navigate('Results');
            })
            .catch((err) => {
              throw new Error('Error querying pixabay: ', err);
            });
        }
      }
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

SearchButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SearchButton;
