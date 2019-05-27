import React, { useContext } from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import NavButton from '../NavButton';
import GlobalContext from '../../contexts/GlobalContext';
import styles from './styles';

// take context in here and pass functions to the nav button and input

const SearchBar = () => {
  const { state, updateKey } = useContext(GlobalContext);

  const newSearch = () => state.queryPixabay(state.query)
    .then((res) => {
      updateKey('selectedImage', null); // reset selected image
      updateKey('docs', res.data.hits); // store query results
      updateKey('totalHits', res.data.hits.length); // total images that match (capped at 200 per query)
    });

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        placeholder="Enter your query here."
        onChangeText={userInput => updateKey('query', userInput)}
        value={state.query}
      />
      <NavButton text="Submit" screen="Results" promise={newSearch} />
    </View>
  );
};

export default SearchBar;
