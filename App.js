/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import {
  createAppContainer,
} from 'react-navigation';
import NavigationService from './app/modules/NavigationService';
import AppNavigator from './app/lib/router';
import { GlobalProvider } from './app/contexts/GlobalContext';
import IosSafeView from './app/containers/IosSafeView';
import AndroidStatusBar from './app/containers/AndroidStatusBar';

// Doesn't need lifecycle hooks and state is provided in provider
const App = props => (
  <GlobalProvider>
    <Fragment>
      <IosSafeView />
      <AndroidStatusBar />
      <AppContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Fragment>
  </GlobalProvider>
);

const AppContainer = createAppContainer(AppNavigator);

export default App;
