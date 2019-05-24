import { NavigationActions } from 'react-navigation';

// eslint-disable-next-line no-underscore-dangle
let _navigator;

// simple module with functions that dispatch user-defined navigation actions.
function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    // eslint-disable-next-line comma-dangle
    })
  );
}

// add other navigation functions that you need and export them below
export default {
  navigate,
  setTopLevelNavigator,
};
