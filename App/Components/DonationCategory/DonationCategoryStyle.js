import { StyleSheet } from 'react-native';
import { Fonts } from 'App/Theme';

export default StyleSheet.create({
  categoryContainer: {
    width: '50%',
    marginBottom: 40,
    alignItems: 'center',
  },
  imageDonation: {
    height: 80,
    width: 80,
  },
  categoryText: {
    fontSize: 18,
    marginTop: 10,
    ...Fonts.textSemiBold,
  },
});
