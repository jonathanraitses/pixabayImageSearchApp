import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  descriptions: {
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '150@ms',
    flexGrow: 1,
  },
});

export default scaledStyles;
