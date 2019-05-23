import React, { Component } from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  SafeAreaView,
} from 'react-navigation';
import DetailsScreen from './app/views/details/DetailsScreen';
import SearchScreen from './app/views/search/SearchScreen';
import AppNavigator from './app/lib/router';
import styles from './app/styles/common';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}

const AppContainer = createAppContainer(AppNavigator);

// const RootStack = createStackNavigator(
//   {
//     Search: SearchScreen,
//     Details: DetailsScreen,
//   },
//   {
//     defaultNavigationOptions: {
//       title: 'Search',
//       headerTintColor: '#fff',
//       headerStyle: {
//         backgroundColor: '#000',
//       },
//     },
//     navigationOptions: {
//       tabBarLabel: 'Search!',
//     },
//     initialRouteName: 'Search',
//   },
// );

// const Tabs = createBottomTabNavigator({ RootStack });
// const AppContainer = createAppContainer(RootStack);
