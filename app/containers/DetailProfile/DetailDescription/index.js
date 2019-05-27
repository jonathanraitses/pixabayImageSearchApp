/* eslint-disable react/prop-types */
import React from 'react';
import {
  View,
} from 'react-native';
import BoldDescription from '../../BoldDescription';
import styles from './styles';

const DetailDescription = ({
  user, url, views, likes, favorites,
}) => (
  <View style={styles.descriptions}>
    <BoldDescription topic="Creator" description={user} />
    <BoldDescription topic="Full Url" description={url} />
    <BoldDescription topic="Views" description={views} />
    <BoldDescription topic="Likes" description={likes} />
    <BoldDescription topic="Favorites" description={favorites} />
  </View>
);

export default DetailDescription;
