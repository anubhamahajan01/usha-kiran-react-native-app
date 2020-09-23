import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'App/Theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginBottom: 50,
  },
  blogTitle: {
    marginTop: 50,
    fontSize: 26,
    color: Colors.headingText,
    marginBottom: 8,
    ...Fonts.textBold,
  },
  postedOn: {
    fontSize: 16,
    color: 'rgba(44, 45, 46, 0.6)',
    ...Fonts.textMedium,
    marginBottom: 16,
  },
  para: {
    color: Colors.headingText,
    fontSize: 16,
    ...Fonts.textMedium,
    lineHeight: 23,
    marginBottom: 16,
  },
});
