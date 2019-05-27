/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import BoldDescription from '../BoldDescription';
// no need for styling

const DescriptionList = ({ descriptions }) => (
  <Fragment>
    {
      descriptions.map(description => (
        <BoldDescription
          topic={description[0]}
          description={description[1]}
          key={description[0]}
        />
      ))
    }
  </Fragment>
);

export default DescriptionList;
