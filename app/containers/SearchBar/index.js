import React from 'react';
import {
  View,
} from 'react-native';
import SearchTextInput from './SearchTextInput';
import SearchButton from './SearchButton';
import styles from './styles';

const SearchBar = () => (
  <View style={styles.searchBar}>
    <SearchTextInput />
    <SearchButton title="submit" />
  </View>
);

export default SearchBar;
