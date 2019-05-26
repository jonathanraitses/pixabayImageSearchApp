import React, { useContext, Fragment } from 'react';
import {
  View,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Icon from '../../containers/NavIcon/NavIcon';
import GlobalContext from '../../contexts/GlobalContext';
import ScreenTitle from '../../containers/Title';
import BoldDescription from '../../containers/BoldDescription';
import NavButton from '../../containers/NavButton';
import AvatarImage from '../../containers/AvatarImage';
import styles from './styles';

// eslint-disable-next-line no-unused-vars
const DetailsScreen = (props) => {
  const { state } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ScreenTitle
          text={
            state.selectedImage === null
              ? 'Please Select an Image from Results First'
              : `Detail Results For Image ID: ${state.selectedImage.id}`
          }
        />
      </View>
      <View style={styles.content}>
        {
          state.selectedImage == null
            ? <Fragment />
            : (
              <Fragment>
                <AvatarImage url={state.selectedImage.previewURL} />
                <BoldDescription topic="Creator" description={state.selectedImage.user} />
                <BoldDescription topic="Full Url" description={state.selectedImage.largeImageURL} />
                <BoldDescription topic="Views" description={state.selectedImage.views} />
                <BoldDescription topic="Likes" description={state.selectedImage.likes} />
                <BoldDescription topic="Favorites" description={state.selectedImage.favorites} />
                <NavButton screen="Results" />
              </Fragment>
            )
        }
      </View>
    </View>
  );
};

DetailsScreen.navigationOptions = {
  header: null,
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
