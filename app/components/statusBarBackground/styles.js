import { Platform } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';


const styles = ScaledSheet.create({
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 18 : 0,
    // test if the platform is iOS to give it a height of 18, else:
    // no height (Android apps have their own status bar)
    backgroundColor: 'red',
  },
});

export default styles;
