/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import config from './app/config.js';

const Context = React.createContext();

const { apiKey } = config;

class MyProvider extends Component {
  state = {
    contextData: "default value",
    dummy: "dummy data"
  }

  render() {
    return (
      <Context.Provider value={{
        state: this.state,
        changeContextData: () => this.setState({
          contextData: this.state.contextData + ' changed',
        }),
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
export default class App extends Component {
  render() {
    return (
      <MyProvider>
        <View style={styles.container}>
          <Child />
        </View>
      </MyProvider>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Context.Consumer>
          {(context) => (
            <React.Fragment>
              <Text style={styles.child}>{context.state.contextData}</Text>
              <Text style={styles.child}>{context.state.dummy}</Text>
              <Button onPress={context.changeContextData} title={"change contextData value"}/>
            </React.Fragment>
          )}
        </Context.Consumer>
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