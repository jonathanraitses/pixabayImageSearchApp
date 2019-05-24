import React from 'react';
import {
  View,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Icon from '../../containers/NavIcon/NavIcon';
import ImagesFlatList from '../../containers/ImagesFlatList';
import styles from './styles';

// Doesn't need lifecycle hooks and state is provided in provider in parent component.
const ResultsScreen = props => (
  <View style={styles.container}>
    <ImagesFlatList />
  </View>
);

// TODO: refactor .navigationOptions to be generated through a function for modularization.
ResultsScreen.navigationOptions = {
  header: null,
  // tintColor refers to lib/router.js props
  // when tab is in focus, color becomes white and icon increases in size
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      name="list"
      size={focused ? moderateScale(28) : moderateScale(22)}
      color={tintColor}
    />
  ),
};

export default ResultsScreen;
//activityIndicator