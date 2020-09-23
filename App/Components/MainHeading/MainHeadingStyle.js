import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'App/Theme';

export default StyleSheet.create({
  heading: {
    fontSize: 22,
    marginBottom: 20,
    ...Fonts.textBold,
    textAlign: 'center',
    color: Colors.headingText,
  },
});
