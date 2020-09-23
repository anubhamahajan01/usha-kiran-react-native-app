import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'App/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  inputContainer: {
    marginTop: 24,
  },
  TextLabel: {
    color: Colors.dark,
    textTransform: 'uppercase',
    fontSize: 15,
    ...Fonts.textSemiBold,
    letterSpacing: 0.5,
    paddingLeft: 6,
  },
  TextInput: {
    ...Fonts.textRegular,
    borderWidth: 0,
    marginTop: 5,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#fbf5f3',
  },

  btnPrimary: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: 5,
    height: 44,
    backgroundColor: '#eb7a00',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
    fontFamily: 'Montserrat-Medium',
  },
  logoImage: {
    height: 50,
    width: 'auto',
    marginTop: 20,
  },
  btnSecondary: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  btnSecondaryText: {
    color: Colors.orangeDark,
    fontSize: 16,
    textTransform: 'uppercase',
    ...Fonts.textMedium,
  },
  error: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
