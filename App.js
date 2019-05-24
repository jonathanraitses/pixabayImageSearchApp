import React, { Fragment } from 'react';
import {
  createAppContainer,
  SafeAreaView,
} from 'react-navigation';
import NavigationService from './app/modules/NavigationService';
import AppNavigator from './app/lib/router';
import { GlobalProvider } from './app/contexts/GlobalContext';
import styles from './app/styles/common';


// Doesn't need lifecycle hooks and state is provided in provider
const App = props => (
  <GlobalProvider>
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: 'red' }} />
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
