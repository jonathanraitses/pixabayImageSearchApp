/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View,
  Button,
} from 'react-native';

export default class ResultsScreen extends Component {
    static navigationOptions = {
      title: 'Results Page',
      headerLeft: null,
    }

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Go to Results... again"
            onPress={() => this.props.navigation.navigate('Results')}
          />
        </View>
      );
    }
}
