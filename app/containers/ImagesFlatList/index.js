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
import BoldDescription from '../BoldDescription';
import RenderSeparator from '../RenderSeparator';
import styles from './styles';

const ImageFlatList = (props) => {
  const { state, updateKey } = useContext(GlobalContext);

  return (
    <FlatList
      data={state.docs}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          {/* clicking image will send item to state as currentImage and navigate to details
          which will describe the selected image.
          */}
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
            <BoldDescription topic="Total Views" description={item.views} />
            <BoldDescription topic="Total Likes" description={item.likes} />
          </View>
        </View>
      )}
      keyExtractor={(item, index) => `${item.id}`}
      ItemSeparatorComponent={() => <RenderSeparator />}
    />
  );
};

export default ImageFlatList;
