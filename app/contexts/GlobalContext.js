/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
import React, { Component, createContext } from 'react';
import axios from 'axios';
import config from '../config';

// API key for pixabay.
const { apiKey } = config;

const GlobalContext = createContext();

export const GlobalConsumer = GlobalContext.Consumer;

// GlobalProvider contains global state as a component.
// Wraps entire application (root/App.js).
export class GlobalProvider extends Component {
  state = {
    query: '', // user input
    queryPixabay: this.queryPixabay, // query function
    docs: [], // stored docs
    selectedImage: null, // user selected image
    totalHits: null, // total images (up to 200 due to query restrictions)
  }

  // docs https://pixabay.com/api/docs/
  queryPixabay(query, page = 1) {
    return axios.get('https://pixabay.com/api/', {
      params: {
        key: apiKey,
        q: query,
        per_page: 200,
        page,
      },
    });
  }

  render() {
    return (
      <GlobalContext.Provider value={{
        state: this.state,
        updateKey: (key, value) => this.setState({
          [key]: value,
        }),
      }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContext;
