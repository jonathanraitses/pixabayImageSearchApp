import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  profile: {
    flex: 1,
    width: '100%',
  },
  descriptions: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: '80%',
    flexGrow: 1,
  },
});

export default scaledStyles;
