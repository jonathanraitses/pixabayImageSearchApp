/* eslint-disable no-unused-vars */
import React, { Fragment, Component } from 'react';
import {
  createAppContainer,
} from 'react-navigation';
import { YellowBox } from 'react-native';
import NavigationService from './app/modules/NavigationService';
import AppNavigator from './app/lib/router';
import { GlobalProvider } from './app/contexts/GlobalContext';
import TopBar from './app/containers/TopBar';

// Doesn't need lifecycle hooks and state is provided in provider
class App extends Component {
  render() {
    // Depreceated warnings.
    YellowBox.ignoreWarnings(['ViewPagerAndroid']);
    return (
      <GlobalProvider>
        <TopBar />
        <AppContainer
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </GlobalProvider>
    );
  }
}

const AppContainer = createAppContainer(AppNavigator);

export default App;
