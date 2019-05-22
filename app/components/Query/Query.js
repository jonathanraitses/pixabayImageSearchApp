import {Component, useContext} from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';

const Query = ({query, variables, children, normalize = data => data}) => {
    
}

Query.propTypes = {
    query: PropTypes.string.isRequired,
    variables: PropTypes.object,
    children: PropTypes.func.isRequired,
    normalize: PropTypes.func,
}