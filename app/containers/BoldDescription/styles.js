import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  topic: {
    fontWeight: 'bold',
    fontSize: '14@s',
  },
  description: {
    fontSize: '14@s',
  },
  descriptionContainer: {
    flexDirection: 'row',
  },
});

export default scaledStyles;
