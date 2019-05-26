import React from 'react';
import {
  View,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Icon from '../../containers/NavIcon/NavIcon';
import ScreenTitle from '../../containers/Title';
import QueryTextInput from '../../containers/QueryTextInput';
import QueryButton from '../../containers/SearchButton';
import styles from './styles';

// eslint-disable-next-line no-unused-vars
const SearchScreen = props => (
  <View style={styles.container}>
    <View style={styles.header}>
      <ScreenTitle text="Type the Keywords for an Image Below and Hit Submit" />
    </View>
    <View style={styles.content}>
      <View style={styles.search}>
        <QueryTextInput />
        <QueryButton title="submit" />
      </View>
    </View>
  </View>
);

// TODO: refactor .navigationOptions to be generated through a function for modularization.
SearchScreen.navigationOptions = {
  header: null,
  // tintColor refers to lib/router.js props
  // when tab is in focus, color becomes white and icon increases in size
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      name="search"
      size={focused ? moderateScale(28) : moderateScale(22)}
      color={tintColor}
    />
  ),
};

export default SearchScreen;
