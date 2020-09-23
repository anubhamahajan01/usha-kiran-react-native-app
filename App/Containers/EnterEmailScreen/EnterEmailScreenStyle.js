import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'App/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logoImage: {
    height: 110,
    width: 'auto',
    marginBottom: 40,
    marginTop: 40,
  },
  text: {
    ...Fonts.textSemiBold,
    fontSize: 18,
    marginBottom: 25,
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 25,
  },
  TextLabel: {
    color: Colors.dark,
    textTransform: 'uppercase',
    fontSize: 15,
    paddingLeft: 9,
    ...Fonts.textSemiBold,
    letterSpacing: 0.5,
  },
  TextInput: {
    ...Fonts.textRegular,
    height: 44,
    borderWidth: 0,
    marginTop: 5,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#fbf5f3',
  },
  btnPrimary: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: Colors.orangeDark,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
    ...Fonts.textMedium,
  },
  btnSecondary: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnSecondaryText: {
    color: Colors.orangeDark,
    fontSize: 16,
    textTransform: 'uppercase',
    ...Fonts.textMedium,
  },
});
