import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'App/Theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 30,
    justifyContent: 'center',
    height: '100%',
    marginBottom: 50,
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-between',
  },
  classTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'black',
  },
  classTitleView: {
    justifyContent: 'center',
    width: '100%',
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
