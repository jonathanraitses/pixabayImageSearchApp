import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    color: 'black',
    fontSize: '20@ms',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'flex-start',
  },
});

export default scaledStyles;
