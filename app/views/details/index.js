import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import DetailsScreen from './DetailsScreen';
import Icon from '../../containers/NavIcon';

DetailsScreen.navigationOptions = {
  header: null,
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      name="information-circle"
      size={focused ? moderateScale(28) : moderateScale(22)}
      color={tintColor}
    />
  ),
};

export default DetailsScreen;
