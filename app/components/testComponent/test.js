import React, { Component, Fragment } from 'react';
import { Text, View, Button } from 'react-native';
import { GlobalConsumer } from '../../providers/GlobalProvider';
import styles from './styles';

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