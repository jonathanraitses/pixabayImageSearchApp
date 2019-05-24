import React, { useContext } from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import styles from './styles';
import GlobalContext from '../../contexts/GlobalContext';

// can be refactored to use for any key in state if you so choose
const QueryTextInput = (...props) => {
  const { state, updateKey } = useContext(GlobalContext);
  // takes state from globalcontext and onChange updates query value with typed input
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter your query here."
        onChangeText={userInput => updateKey('query', userInput)}
        value={state.query}
        {...props}
      />
    </View>
  );
};

export default QueryTextInput;
