/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import NavigationService from '../../modules/NavigationService';
import GlobalContext from '../../contexts/GlobalContext';
import RenderSeparator from '../RenderSeparator';
import styles from './styles';

const ImageFlatList = (props) => {
  const { state, updateKey } = useContext(GlobalContext);

  return (
  // TODO: refactor and seperate child components into their own
    <FlatList
      data={state.docs}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          {/* clicking image will send item to state as currentImage and navigate to details */}
          <TouchableOpacity
            onPress={
                  () => {
                    updateKey('selectedImage', item);
                    NavigationService.navigate('Details');
                  }
              }
          >
            <Image
              style={styles.itemImage}
              source={{ uri: item.previewURL }}
              // can retain image pixel ratio be using resolveAssetSource module
            />
          </TouchableOpacity>
          <View style={styles.itemDescriptionContainer}>
            <Text style={styles.itemViews}>{`Total Views: ${item.views}`}</Text>
            <Text style={styles.itemLikes}>{`Total Likes: ${item.likes}`}</Text>
          </View>
        </View>
      )}
      keyExtractor={(item, index) => `${item.id}`}
      ItemSeparatorComponent={() => <RenderSeparator />}
    />
  );
};

export default ImageFlatList;
