import React, { Fragment } from 'react';
import { Text, View, Button } from 'react-native';
import GlobalProvider, { GlobalConsumer } from '../../providers/GlobalProvider';
import styles from './styles';

const App = () => (
  <GlobalProvider>
    <View style={styles.container}>
      <Child />
    </View>
  </GlobalProvider>
);

const Child = () => (
  <View style={styles.container}>
    <GlobalConsumer>
      {context => (
        <Fragment>
          <Text style={styles.child}>{context.state.test}</Text>
          <Button onPress={() => context.state.queryPixabay('flowers')} title="change contextData value" />
        </Fragment>
      )}
    </GlobalConsumer>
  </View>
);

export default App;
