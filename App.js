import React, { Component } from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import DetailsScreen from './app/views/details/DetailsScreen';
import SearchScreen from './app/views/search/SearchScreen';
import AppNavigator from './app/lib/router';
import styles from './app/styles/common';
import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <StatusBar
            backgroundColor='red'
            barStyle='light-content'
          />
          <View style={styles.header}>
            <Icon name='ios-camera' size={28} color='white'/>
            <Icon name='ios-menu' size={28} color='white'/>
          </View>
          <AppContainer />
        </View>
    );
  }
}

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

const AppContainer = createAppContainer(AppNavigator);
