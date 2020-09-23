import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'App/Theme';
export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.7);',
    zIndex: 1,
    position: 'relative',
  },
  modalView: {
    width: '100%',
    minHeight: 300,
    maxHeight: '85%',
    zIndex: 20,
    backgroundColor: 'white',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 25,
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
    marginTop: 24,
    paddingBottom: 16,
    textAlign: 'center',
    fontSize: 18,
    color: 'black',

    ...Fonts.textBold,
  },
  modalTitle: {
    marginTop: 20,
    paddingBottom: 5,
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
    ...Fonts.textSemiBold,
  },
  menuText: {
    ...Fonts.textBold,
    fontSize: 24,
  },
});
