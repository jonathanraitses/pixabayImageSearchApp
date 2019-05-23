/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View,
  Button,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Icon from '../../components/navIcon/NavIcon';
import styles from './styles';

export default class DetailsScreen extends Component {
    static navigationOptions = {
      header: null,
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name="information-circle"
          size={focused ? moderateScale(28) : moderateScale(22)}
          color={tintColor}
        />
      ),
    }

    render() {
      return (
        <View style={styles.container}>
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      );
    }
}
