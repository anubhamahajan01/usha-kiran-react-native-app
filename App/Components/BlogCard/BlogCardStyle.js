import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'App/Theme';

export default StyleSheet.create({
  blogCard: {
    padding: 16,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(44, 45, 46, 0.2)',
    // elevation: 5,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // shadowColor: 'rgba(0, 0, 0, 0.1)',
    // shadowOpacity: 0.8,
    // elevation: 6,
    // shadowRadius: 15,
    // shadowOffset: { width: 1, height: 13 },
  },
  title: {
    fontSize: 22,
    color: Colors.headingText,
    marginBottom: 8,
    ...Fonts.textBold,
  },
  desc: {
    fontSize: 16,
    color: 'rgba(44, 45, 46, 0.8)',
    marginBottom: 16,
    ...Fonts.textMedium,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontSize: 14,
    color: 'rgba(44, 45, 46, 0.6)',
    ...Fonts.textMedium,
  },
  readMoreBtn: {
    backgroundColor: Colors.orangeDark,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  readMoreBtnText: {
    color: 'white',
    ...Fonts.textSemiBold,
    textTransform: 'uppercase',
  },
});
