import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 3,
  },
  itemImage: {
    width: '100%',
    height: '100@ms0.6',
    margin: 5,
  },
});

export default scaledStyles;
