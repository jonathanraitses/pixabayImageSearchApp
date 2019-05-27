import {
  StyleSheet,
} from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
  top: {
    flex: 0,
    backgroundColor: config.statusBarColor || 'red',
  },
});

export default styles;
