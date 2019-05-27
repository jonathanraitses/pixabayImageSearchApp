/* eslint-disable react/prop-types */
import React from 'react';
import {
  View,
} from 'react-native';
import BoldDescription from '../../BoldDescription';
import styles from './styles';

const DetailDescription = ({ descriptions }) => (
  <View style={styles.descriptions}>
    {
      descriptions.map(description => (
        <BoldDescription topic={description[0]} description={description[1]} key={description[0]} />
      ))
    }
  </View>
);

export default DetailDescription;
