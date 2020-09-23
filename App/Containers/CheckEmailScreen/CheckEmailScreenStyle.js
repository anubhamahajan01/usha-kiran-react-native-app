import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'App/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  logoImage: {
    height: 110,
    // width: 'auto',
    marginBottom: 40,
    marginTop: 40,
  },
  text: {
    ...Fonts.textSemiBold,
    fontSize: 18,
    marginBottom: 25,
    textAlign: 'center',
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
});
