import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  title: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  header: {
    color: 'black',
    fontSize: '20@ms',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default scaledStyles;
