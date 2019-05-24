import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  topic: {
    fontWeight: 'bold',
    fontSize: '14@ms',
  },
  description: {
    fontSize: '14@ms',
  },
  descriptionContainer: {
    flexDirection: 'row',
    width: '100@ms',
  },
});

export default scaledStyles;
