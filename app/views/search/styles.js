import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    backgroundColor: 'yellow',
  },
  content: {
    flex: 2,
    justifyContent: 'center',
  },
});

export default scaledStyles;
