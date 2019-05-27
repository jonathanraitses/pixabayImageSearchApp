import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import SearchScreen from './SearchScreen';
import Icon from '../../containers/NavIcon';

SearchScreen.navigationOptions = {
  header: null,
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
