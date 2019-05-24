import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  inputContainer: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: '200@ms',
  },
  input: {
    height: '40@ms',
    fontSize: '14@ms',
    backgroundColor: '#ffffff',
  },
});

export default scaledStyles;
