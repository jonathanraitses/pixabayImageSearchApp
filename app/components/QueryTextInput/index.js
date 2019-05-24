import React, { useContext } from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import styles from './styles';
import GlobalContext from '../../contexts/GlobalContext';

const QueryTextInput = (props) => {
  let { query, setQuery } = useContext(GlobalContext);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        {...props}
        style={styles.inputField}
        placeholder="Enter your query here."
        placeholderStyle={styles.placeHolder}
        //onChangeText={userInput => setQuery(userInput)}
        value={query}
      />
    </View>
  );
};

export default QueryTextInput;
