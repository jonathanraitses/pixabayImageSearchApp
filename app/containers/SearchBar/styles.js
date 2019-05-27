import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: '200@ms',
    height: '40@ms',
    fontSize: '14@ms',
    backgroundColor: '#ffffff',
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export default scaledStyles;
