import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  itemImage: {
    width: '80@ms0.6',
    height: '80@ms0.6',
  },
  itemDescriptionContainer: {
    paddingLeft: 5,
    justifyContent: 'center',
  },
});

export default scaledStyles;
