import React, { useContext } from 'react';
import {
  View,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Icon from '../../containers/NavIcon/NavIcon';
import GlobalContext from '../../contexts/GlobalContext';
import BoldDescription from '../../containers/BoldDescription';
import NavButton from '../../containers/NavButton';
import AvatarImage from '../../containers/AvatarImage';
import styles from './styles';

// Doesn't need lifecycle hooks and state is provided in provider in parent component.
// eslint-disable-next-line no-unused-vars
const DetailsScreen = (props) => {
  const { state } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <AvatarImage url={state.selectedImage.userImageURL} />
      <BoldDescription topic="Creator" description={state.selectedImage.user} />
      <BoldDescription topic="Full Url" description={state.selectedImage.largeImageURL} />
      <BoldDescription topic="Views" description={state.selectedImage.views} />
      <BoldDescription topic="Likes" description={state.selectedImage.likes} />
      <BoldDescription topic="Favorites" description={state.selectedImage.favorites} />
      <NavButton screen="Results" />
    </View>
  );
};

// TODO: refactor .navigationOptions to be generated through a function for modularization.
DetailsScreen.navigationOptions = {
  header: null,
  // tintColor refers to lib/router.js props
  // when tab is in focus, color becomes white and icon increases in size
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      name="information-circle"
      size={focused ? moderateScale(28) : moderateScale(22)}
      color={tintColor}
    />
  ),
};

export default DetailsScreen;
