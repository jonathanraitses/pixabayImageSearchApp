/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
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

const ImageFlatList = (props) => {
  const { state, updateKey } = useContext(GlobalContext);

  // instaniate ref
  const flatList = React.createRef();

  return (
    <FlatList
      ref={flatList}
      data={state.docs}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
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
      // onEndReached={
      //   () => {
      //     updateKey('page', state.page + 1);
      //     state.queryPixabay(state.query, state.page + 1)
      //       .then((res) => {
      //       // gets new data from next page of query, sets page counter in state
      //         updateKey('docs', res.data.hits);
      //       })
      //       .catch((err) => {
      //         if (err) {
      //         // end of the data
      //         // not tested
      //         }
      //       });
      //     // uses list ref to force user to top of page.
      //     // should occur before onEndReached due to event queue, but cannot
      //     // guarantee that new content will be at topby the time it works.
      //     // issue is that ref only works on stateful components and hooks for functional.
      //     flatList.getNode().scrollTo({
      //       y: 0,
      //       animated: true,
      //     });
      //   }
      // }
      initialNumToRender={8}
      maxToRenderPerBatch={2}
      onEndReachedThreshold={0.5}
    />
  );
};

export default ImageFlatList;
