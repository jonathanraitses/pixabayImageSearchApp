import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  descriptionContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: '5@ms',
    paddingRight: '5@ms',
    flexDirection: 'row',
  },
});

export default scaledStyles;
