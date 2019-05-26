import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import NavigationService from '../../modules/NavigationService';
import GlobalContext from '../../contexts/GlobalContext';
import styles from './styles';

// Easily refactorable to pass more props and determine where to query
const SearchButton = ({ title }) => {
  const { state, updateKey } = useContext(GlobalContext);

  // Formatted using TouchableOpacy and text because a regular button
  // has fewer styling options.
  return (
    // onPress takes data generated from QueryTextInput in state and
    // queries pixabay using function in GlobalContext
    <TouchableOpacity
      style={styles.touchable}
      onPress={
        () => {
          state.queryPixabay(state.query)
            .then((res) => {
              // reset to page 1
              updateKey('page', 1);
              // takes docs from query, and updates provider
              updateKey('docs', res.data.hits);
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
