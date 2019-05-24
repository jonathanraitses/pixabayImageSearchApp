/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable semi */
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
    query: '',
    queryPixabay: this.queryPixabay,
    docs: [],
    selectedImage: {},
    page: 1,
    loading: false,
  }
  // TODO: seperate contexts and add activity navigator for loading during fetch
  // query and queryPixabay / docs and selectedImage to avoid rerenders

  // docs https://pixabay.com/api/docs/
  // defaults to 20 images unless added per_page key in params
  queryPixabay(query, page = 1) {
    return axios.get('https://pixabay.com/api/', {
      params: {
        key: apiKey,
        q: query,
        per_page: 200,
        page,
      },
    })
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
