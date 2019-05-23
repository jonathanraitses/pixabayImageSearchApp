import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  wrapper: {
    flex: 1,
  },
  noFlex: {
    flex: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    paddingHorizontal: 10,
  },
  background: {
    backgroundColor: 'red',
  },
});

export default scaledStyles;
