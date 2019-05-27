import React from 'react';
import {
  View,
} from 'react-native';
import Title from '../../containers/Title';
import SearchBar from '../../containers/SearchBar';
import styles from './styles';

// eslint-disable-next-line no-unused-vars
const SearchScreen = props => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Title text="Type the Keywords for an Image Below and Hit Submit" />
    </View>
    <View style={styles.content}>
      <SearchBar />
    </View>
  </View>
);

export default SearchScreen;
