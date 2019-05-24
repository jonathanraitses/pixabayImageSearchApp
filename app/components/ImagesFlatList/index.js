import React, { useContext } from 'react';
import {
  Image,
  FlatList,
  TouchableOpacity,
  Text,
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
        <TouchableOpacity
          style={styles.itemContainer}
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
      )}
      keyExtractor={(item, index) => `${item.id}`}
      ItemSeparatorComponent={() => <RenderSeparator />}
    />
  );
};

export default ImageFlatList;
