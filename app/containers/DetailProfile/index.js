import React, { Fragment } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import DescriptionList from '../DescriptionList';
import AvatarImage from './AvatarImage';
import NavButton from '../NavButton';
import styles from './styles';


const DetailProfile = ({
  selectedImage: {
    previewURL, user, largeImageURL, views, likes, favorites,
  },
}) => {
  const descriptions = [
    ['Creator', user],
    ['Full Url', largeImageURL],
    ['Views', views],
    ['Likes', likes],
    ['Favorites', favorites],
  ];
  return (
    <Fragment>
      <AvatarImage url={previewURL} />
      <View style={styles.descriptions}>
        <DescriptionList descriptions={descriptions} />
      </View>
      <NavButton screen="Results" text="Return to Results" />
    </Fragment>
  );
};

DetailProfile.propTypes = {
  selectedImage: PropTypes.shape({
    previewURL: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    favorites: PropTypes.number.isRequired,
  }).isRequired,
};

export default DetailProfile;
