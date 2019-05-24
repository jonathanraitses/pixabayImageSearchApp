/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  View,
  Button,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import NavigationService from '../../modules/NavigationService';
import Icon from '../../components/NavIcon/NavIcon';
import styles from './styles';

// Doesn't need lifecycle hooks and state is provided in provider in parent component.
const DetailsScreen = props => (
  <View style={styles.container}>
    <Button
      title="Go to Details... again"
      onPress={() => NavigationService.navigate('Details')}
    />
  </View>
);

// TODO: refactor .navigationOptions to be generated through a function for modularization.
DetailsScreen.navigationOptions = {
  header: null,
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      name="information-circle"
      size={focused ? moderateScale(28) : moderateScale(22)}
      color={tintColor}
    />
  ),
};

export default DetailsScreen;
