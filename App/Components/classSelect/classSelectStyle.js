import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  checkboxContainerStyle: {
    height: 60,
    width: '30%',
    elevation: 6,
    marginTop: 20,
    borderRadius: 5,
    shadowRadius: 15,
    shadowOpacity: 0.8,
    backgroundColor: '#ffff',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 1, height: 13 },
  },
  checkboxPrimary: {
    flex: 1,
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 20,
    width: '100%',
    color: '#1FC59F',
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
  activeCheckboxLabel: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  checkboxActiveFill: {
    borderRadius: 5,
    backgroundColor: '#1FC59F',
  },
});
