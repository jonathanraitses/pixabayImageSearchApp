/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View,
  Button,
} from 'react-native';
import styles from './styles';
import Icon from '../../components/navIcon/NavIcon';

export default class DetailsScreen extends Component {
    static navigationOptions = {
      title: 'Details',
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

DetailsScreen.navigationOptions = {
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      name="information-circle"
      // size={styles.navigationIcon}
      size={focused ? 28 : 22}
      color={tintColor}
    />
  ),
};
