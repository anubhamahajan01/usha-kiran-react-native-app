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
  categoriesFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  disabledBtn: {
    backgroundColor: '#ffbd75',
  },
  btnPrimary: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: 5,
    height: 45,
    width: 150,
    backgroundColor: '#eb7a00',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    ...Fonts.textSemiBold,
  },
  btnView: {
    paddingHorizontal: 40,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeading: {
    fontSize: 16,
    textAlign: 'center',
    ...Fonts.textSemiBold,
    marginBottom: 20,
  },
});
