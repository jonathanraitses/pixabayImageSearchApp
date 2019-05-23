/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View,
  Button,
} from 'react-native';
import styles from './styles';
import Icon from '../../components/navIcon/NavIcon';

export default class ResultsScreen extends Component {
    static navigationOptions = {
      title: 'Results',
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

ResultsScreen.navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name="list"
        // size={styles.navigationIcon}
        size={focused ? 28 : 22}
        color={tintColor}
      />
    ),
  };
  