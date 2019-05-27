import React, { useContext } from 'react';
import {
  View,
} from 'react-native';
import GlobalContext from '../../contexts/GlobalContext';
import Title from '../../containers/Title';
import ImagesFlatList from '../../containers/ImagesFlatList';
import styles from './styles';

// eslint-disable-next-line no-unused-vars
const ResultsScreen = (props) => {
  const { state } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title
          text={
            state.docs.length === 0
              ? 'Nothing Found. Please Try a New Keyword!'
              : `Total Results for '${state.query}': ${state.totalHits}`
          }
        />
      </View>
      <View style={styles.content}>
        {/* ADD PAGE NAVIGATOR HERE */}
        <ImagesFlatList />
      </View>
    </View>
  );
};

export default ResultsScreen;
