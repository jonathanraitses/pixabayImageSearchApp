import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import DetailDescription from './DetailDescription';
import AvatarImage from './AvatarImage';
import NavButton from '../NavButton';


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
      <DetailDescription descriptions={descriptions} />
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
