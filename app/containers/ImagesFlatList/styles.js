import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  itemDescriptionContainer: {
    paddingLeft: 5,
    justifyContent: 'center',
  },
});

export default scaledStyles;
