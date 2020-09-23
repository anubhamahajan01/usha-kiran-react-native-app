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
    paddingBottom: 30,
  },
  inputContainer: {
    marginTop: 20,
    flex: 1,
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
  TextArea: {
    ...Fonts.textRegular,
    borderWidth: 0,
    marginTop: 5,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#fbf5f3',
  },
  tooltip: {
    ...Fonts.textRegular,
    fontSize: 14,
    marginTop: 8,
  },
  btnPrimary: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: '#eb7a00',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
    ...Fonts.textMedium,
  },
});
