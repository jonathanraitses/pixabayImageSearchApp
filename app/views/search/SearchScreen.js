/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Icon from '../../components/navIcon/NavIcon';
import styles from './styles';

export default class SearchScreen extends Component {
    static navigationOptions = {
      header: null,
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name="search"
          size={focused ? moderateScale(28) : moderateScale(22)}
          color={tintColor}
        />
      ),
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.header}>Search Screen</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
              <Text style={styles.navButton}>Go To Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
}
