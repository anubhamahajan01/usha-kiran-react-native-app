import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'App/Theme';
export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.7);',
    zIndex: 1,
  },
  modalView: {
    width: '100%',
    height: '35%',
    zIndex: 20,
    backgroundColor: 'white',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    opacity: 1,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginTop: 20,
    paddingBottom: 5,
    textAlign: 'center',
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: Colors.orangeDark,
    color: Colors.orangeDark,
    ...Fonts.textSemiBold,
  },
  menuText: {
    ...Fonts.textBold,
    fontSize: 24,
  },
});
