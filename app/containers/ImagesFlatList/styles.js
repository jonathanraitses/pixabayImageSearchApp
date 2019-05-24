import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 3,
  },
  itemImage: {
    width: '80@ms0.6',
    height: '80@ms0.6',
    margin: 5,
  },
  itemDescriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 5,
  },
  itemViews: {
    fontSize: '18@ms',
    color: 'green',
    marginBottom: 15,
  },
  itemLikes: {
    fontSize: '16@ms',
    color: 'orange',
  },
});

export default scaledStyles;
