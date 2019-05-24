import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  topic: {
    fontWeight: 'bold',
    fontSize: '14@ms',
    height: '40@ms',
  },
  description: {
    fontSize: '14@ms',
    height: '40@ms',
  },
  descriptionContainer: {
    flexDirection: 'row',
    height: '40@ms',
  },
});

export default scaledStyles;
