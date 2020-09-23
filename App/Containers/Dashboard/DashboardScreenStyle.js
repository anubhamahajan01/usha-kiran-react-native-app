import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'App/Theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 50,
    justifyContent: 'center',
  },
  headingWrapper: {
    marginBottom: 20,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: 5,
    height: 50,
    marginBottom: 40,
  },
  btnGreen: {
    backgroundColor: Colors.greenDark,
  },
  btnOrange: {
    backgroundColor: Colors.orangeDark,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    ...Fonts.textSemiBold,
  },
  customerText: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
    color: '#ff8400',
    ...Fonts.textBold,
  },
  dashboardImg: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
