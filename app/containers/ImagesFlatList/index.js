/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import GlobalContext from '../../contexts/GlobalContext';
import NavImage from '../NavImage';
import BoldDescription from '../BoldDescription';
import ListHeader from './ListHeader';
import RenderSeparator from './RenderSeparator';
import styles from './styles';

// on enter make it go to top
class ImageFlatList extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.keyExtractor = this.keyExtractor.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  keyExtractor(item) {
    return `${item.id}`;
  }

  // eslint-disable-next-line class-methods-use-this
  renderItem(item, updateKey) {
    return (
      <View style={styles.itemContainer}>
        <NavImage
          screen="Details"
          image={item.previewURL}
          func={() => { updateKey('selectedImage', item); }}
        />
        <View style={styles.itemDescriptionContainer}>
          <BoldDescription topic="Total Views" description={item.views} />
          <BoldDescription topic="Total Likes" description={item.likes} />
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
              //ListFooterComponent={() => <ListFooter />}
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
