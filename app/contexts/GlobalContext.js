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
      queryPixabay: this.queryPixabay,
      results: null,
      currentImage: null,
      details: null,
    }

    // docs https://pixabay.com/api/docs/
    // defaults to 20 images unless added per_page key in params
    queryPixabay(query) {
      axios.get('https://pixabay.com/api/', {
        params: {
          key: apiKey,
          q: query,
        },
      })
        .then((res) => {
          this.setState({
            results: res,
          });
          console.log(this.state.results);
        })
        .catch((err) => {
          throw new Error('Error querying pixabay: ', err);
        });
    }

    render() {
      return (
        <GlobalContext.Provider value={{ state: this.state }}>
          {this.props.children}
        </GlobalContext.Provider>
      );
    }
}

export default GlobalContext;
