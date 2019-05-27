/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import GlobalContext from '../../contexts/GlobalContext';
import NavImage from '../NavImage';
import ItemDescription from './ItemDescription';
import ListHeader from './ListHeader';
import RenderSeparator from './RenderSeparator';
import styles from './styles';

// on enter make it go to top
class ImageFlatList extends Component {
  keyExtractor(item) {
    return `${item.id}`;
  }

  renderItem(item, updateKey) {
    return (
      <View style={styles.itemContainer}>
        <NavImage
          screen="Details"
          image={item.previewURL}
          func={() => { updateKey('selectedImage', item); }}
        />
        <ItemDescription views={item.views} likes={item.likes} />
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
              initialNumToRender={8}
              maxToRenderPerBatch={8}
            />
          )
        }
      </GlobalContext.Consumer>
    );
  }
}

export default ImageFlatList;
