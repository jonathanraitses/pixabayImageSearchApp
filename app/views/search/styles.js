import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingTop: '2%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    color: 'black',
    fontSize: '20@s',
  },
  navButton: {
    color: 'white',
    backgroundColor: '#FF1654',
  },
});

export default scaledStyles;
