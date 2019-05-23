import React, { Fragment } from 'react';
import {
  createAppContainer,
  SafeAreaView,
} from 'react-navigation';
import AppNavigator from './app/lib/router';
import GlobalProvider from './app/providers/GlobalProvider';
import styles from './app/styles/common';

// Doesn't need lifecycle hooks and state is provided in provider
const App = () => (
  <GlobalProvider>
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: 'red' }} />
      <AppContainer />
    </Fragment>
  </GlobalProvider>
);

const AppContainer = createAppContainer(AppNavigator);

export default App;
