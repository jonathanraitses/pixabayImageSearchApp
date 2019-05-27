import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import ResultsScreen from './ResultsScreen';
import Icon from '../../containers/NavIcon';

ResultsScreen.navigationOptions = {
  header: null,
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      name="list"
      size={focused ? moderateScale(28) : moderateScale(22)}
      color={tintColor}
    />
  ),
};

export default ResultsScreen;
