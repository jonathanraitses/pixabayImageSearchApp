import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import BoldDescription from '../BoldDescription';
import NavButton from '../NavButton';
import AvatarImage from './AvatarImage';
import styles from './styles';

const DetailProfile = ({
  selectedImage: {
    previewURL, user, largeImageURL, views, likes, favorites,
  },
}) => (
  <View style={styles.container}>
    <AvatarImage url={previewURL} />
    <BoldDescription topic="Creator" description={user} />
    <BoldDescription topic="Full Url" description={largeImageURL} />
    <BoldDescription topic="Views" description={views} />
    <BoldDescription topic="Likes" description={likes} />
    <BoldDescription topic="Favorites" description={favorites} />
    <NavButton screen="Results" />
  </View>
);

DetailProfile.propTypes = {
  selectedImage: PropTypes.shape({
    // eslint-disable-next-line react/require-default-props
    previewURL: PropTypes.string,
    user: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    favorites: PropTypes.number.isRequired,
  }).isRequired,
};

export default DetailProfile;
