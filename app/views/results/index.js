/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  View,
  Button,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import NavigationService from '../../modules/NavigationService';
import { GlobalConsumer } from '../../contexts/GlobalContext';
import ScreenTitle from '../../components/ScreenTitle';
import Icon from '../../components/NavIcon/NavIcon';
import styles from './styles';

// Doesn't need lifecycle hooks and state is provided in provider in parent component.
const ResultsScreen = props => (
  <GlobalConsumer>
    {context => (
      <View style={styles.container}>
        { // TODO: Add switch and store if there is a problem with query state issue here if so.
          context.state.results === null
            ? <ScreenTitle text="Please search first." />
            : ''
        }
        <View style={styles.content} />
      </View>
    )}
  </GlobalConsumer>
);

// TODO: refactor .navigationOptions to be generated through a function for modularization.
ResultsScreen.navigationOptions = {
  header: null,
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      name="list"
      size={focused ? moderateScale(28) : moderateScale(22)}
      color={tintColor}
    />
  ),
};

export default ResultsScreen;
