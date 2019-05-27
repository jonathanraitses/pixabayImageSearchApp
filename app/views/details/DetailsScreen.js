import React, { useContext } from 'react';
import {
  View,
} from 'react-native';
import GlobalContext from '../../contexts/GlobalContext';
import Title from '../../containers/Title';
import DetailProfile from '../../containers/DetailProfile';
import styles from './styles';

// eslint-disable-next-line no-unused-vars
const DetailsScreen = (props) => {
  const { state } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title
          text={
            state.selectedImage === null
              ? 'Please Select an Image from Results'
              : `Detail Results For Image ID: ${state.selectedImage.id}`
          }
        />
      </View>
      <View style={styles.content}>
        {
          state.selectedImage === null
            ? null
            : <DetailProfile selectedImage={state.selectedImage} />
        }
      </View>
    </View>
  );
};

export default DetailsScreen;
