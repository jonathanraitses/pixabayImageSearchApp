/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import GlobalContext from '../../contexts/GlobalContext';
import NavImage from '../NavImage';
import DescriptionList from '../DescriptionList';
import ListHeader from './ListHeader';
import RenderSeparator from './RenderSeparator';
import styles from './styles';

class ImageFlatList extends Component {
  keyExtractor(item) {
    return `${item.id}`;
  }

  renderItem(item, updateKey) {
    const descriptions = [['Total Views', item.views], ['Total Likes', item.likes]];
    return (
      <View style={styles.itemContainer}>
        <NavImage
          screen="Details"
          image={item.previewURL}
          func={() => { updateKey('selectedImage', item); }}
        />
        <View style={styles.itemDescriptionContainer}>
          <DescriptionList descriptions={descriptions} />
        </View>
      </View>
    );
  }

  render() {
    return (
      <GlobalContext.Consumer>
        {
          ({ state, updateKey }) => (
            <FlatList
              data={state.docs}
              renderItem={({ item }) => this.renderItem(item, updateKey)}
              keyExtractor={(item, index) => this.keyExtractor(item)}
              ItemSeparatorComponent={() => <RenderSeparator />}
              ListHeaderComponent={() => <ListHeader totalHits={state.totalHits} />}
              initialNumToRender={6}
              maxToRenderPerBatch={4}
            />
          )
        }
      </GlobalContext.Consumer>
    );
  }
}

export default ImageFlatList;
