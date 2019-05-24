import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  content: {
    flex: 2,
    alignItems: 'flex-start',
  },
  search: {
    flexDirection: 'row',
  }
});

export default scaledStyles;
