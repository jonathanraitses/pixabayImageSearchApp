/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from './styles';

export default class SearchScreen extends Component {
    static navigationOptions = {
      header: null,
    }

    render() {
      return (
        <View style={styles.container}>
          <SafeAreaView>
            <View style={styles.title}>
              <Text style={styles.header}>Search Screen</Text>
            </View>
          </SafeAreaView>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
              <Text style={styles.navButton}>Go To Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
}
