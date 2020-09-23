import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'App/Theme';

export default StyleSheet.create({
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
    borderWidth: 1,
    marginTop: 5,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#fbf5f3',
  },
});
