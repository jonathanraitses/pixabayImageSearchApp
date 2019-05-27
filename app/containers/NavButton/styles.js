import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  touchable: {
    height: '40@ms',
    backgroundColor: 'blue',
    borderColor: 'black',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: '14@ms',
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    marginLeft: 1,
  },
});

export default scaledStyles;
