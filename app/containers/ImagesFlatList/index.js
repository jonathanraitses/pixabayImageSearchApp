/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import NavigationService from '../../modules/NavigationService';
import GlobalContext from '../../contexts/GlobalContext';
import BoldDescription from '../BoldDescription';
import RenderSeparator from '../RenderSeparator';
import styles from './styles';

// on enter make it go to top
class ImageFlatList extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
    this.keyExtractor = this.keyExtractor.bind(this);
  }

  onEndReached(state, updateKey) {
    // update page and docs in state
    updateKey('page', state.page + 1);
    state
      .queryPixabay(state.query, state.page)
      .then((res) => {
        updateKey('docs', res.data.hits);
        // Push user to top of rerendered list after rerender
        this.listRef.getNode().scrollTo({
          y: 0,
          animated: true,
        });
      })
      .catch((err) => {
        if (err) {
          throw new Error('Error in ImageFlatList onEndReached: ', err);
        }
      });
  }

  // eslint-disable-next-line class-methods-use-this
  keyExtractor(item) {
    return `${item.id}`;
  }

  // eslint-disable-next-line class-methods-use-this
  renderItem(item, updateKey) {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => {
            updateKey('selectedImage', item);
            NavigationService.navigate('Details');
          }}
        >
          <Image
            style={styles.itemImage}
            source={{ uri: item.previewURL }}
          />
        </TouchableOpacity>
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
              ref={(ref) => { this.listRef = ref; }}
              data={state.docs}
              renderItem={({ item }) => this.renderItem(item, updateKey)}
              keyExtractor={(item, index) => this.keyExtractor(item)}
              ItemSeparatorComponent={() => <RenderSeparator />}
              onEndReached={() => this.onEndReached(state, updateKey)}
              initialNumToRender={8}
              maxToRenderPerBatch={4}
              onEndReachedThreshold={0.5}
            />
          )
        }
      </GlobalContext.Consumer>
    );
  }
}

export default ImageFlatList;
