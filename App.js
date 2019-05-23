import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import DetailsScreen from './app/views/DetailsScreen.js';
import HomeScreen from './app/views/HomeScreen.js';

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);