/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View,
  Button,
} from 'react-native';

export default class DetailsScreen extends Component {
    static navigationOptions = {
      title: 'Details Page',
      headerLeft: null,
    }

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      );
    }
}
