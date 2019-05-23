import React, { Component, createContext } from 'react';
import axios from 'axios';
import config from '../config.js';

// API key for pixabay
const { apiKey } = config;

const GlobalContext = createContext();

export const GlobalConsumer = GlobalContext.Consumer;

// Provider will be exported wrapped in GlobalProvider component.
class GlobalProvider extends Component {
    state = {
      test: 'this is test data.',
      setTest: () => this.setState({
        test: 'touched',
      }),
      queryPixabay: this.queryPixabay,
      results: null,
      currentImage: null,
      details: [],
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
          console.log(res.data);
        })
        .catch((err) => {
          throw new Error('Error querying pixabay: ', err);
        });
    }

    setResults() {

    }

    render() {
      return (
            // value prop is where we define what values are accesible
            // to the consumer components
          <GlobalContext.Provider value={{ state: this.state }}>
              {this.props.children}
          </GlobalContext.Provider>
      );
    }
}

export default GlobalProvider;
