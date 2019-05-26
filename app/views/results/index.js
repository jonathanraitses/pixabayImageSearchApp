import React, { useContext } from 'react';
import {
  View,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Icon from '../../containers/NavIcon/NavIcon';
import GlobalContext from '../../contexts/GlobalContext';
import ScreenTitle from '../../containers/Title';
import ImagesFlatList from '../../containers/ImagesFlatList';
import styles from './styles';

// eslint-disable-next-line no-unused-vars
const ResultsScreen = (props) => {
  const { state } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ScreenTitle
          text={
            state.docs.length === 0
              ? 'Search Results: Nothing found. Please try a new keyword'
              : `Search Results: ${state.docs.length}`
          }
        />
      </View>
      <View style={styles.content}>
        {/* ADD PAGE NAVIGATOR HERE */}
        <ImagesFlatList />
      </View>
    </View>
  );
};

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
