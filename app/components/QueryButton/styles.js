import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  button: {
    backgroundColor: 'blue',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: '12@ms',
    color: 'white',
    fontSize: '14@ms',
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
  },
});

export default scaledStyles;
