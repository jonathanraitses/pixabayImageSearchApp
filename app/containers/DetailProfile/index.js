import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import DetailDescription from './DetailDescription';
import AvatarImage from './AvatarImage';
import NavButton from '../NavButton';

const DetailProfile = ({
  selectedImage: {
    previewURL, user, largeImageURL, views, likes, favorites,
  },
}) => (
  <Fragment>
    <AvatarImage url={previewURL} />
    <DetailDescription
      url={largeImageURL}
      user={user}
      views={views}
      likes={likes}
      favorites={favorites}
    />
    <NavButton screen="Results" text="Return to Results" />
  </Fragment>
);

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
