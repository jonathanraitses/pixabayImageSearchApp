import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class DetailsScreen extends Component {
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