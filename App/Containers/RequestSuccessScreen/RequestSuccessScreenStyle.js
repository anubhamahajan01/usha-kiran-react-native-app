import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'App/Theme';

export default StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    paddingTop: 30,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    ...Fonts.textSemiBold,
  },
  thankyouText: {
    marginTop: 10,
  },
  contactText: {
    marginTop: 30,
    marginBottom: 15,
  },
  imageTick: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  callBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageCall: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  textCall: {
    fontSize: 20,
    ...Fonts.textSemiBold,
  },
  btnPrimary: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: Colors.orangeDark,
    marginTop: 56,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
    ...Fonts.textMedium,
  },
});
