/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { GlobalConsumer } from '../../providers/GlobalProvider.js';

export default class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <View style={styles.container}>
          <Child />
        </View>
      </GlobalProvider>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GlobalConsumer>
          {(context) => (
            <Fragment>
              <Text style={styles.child}>{context.state.test}</Text>
              <Button onPress={() => context.state.queryPixabay('flowers')} title={"change contextData value"}/>
            </Fragment>
          )}
        </GlobalConsumer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10
  },
  child: {
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});