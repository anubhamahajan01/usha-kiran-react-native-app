import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'App/Theme';
export default StyleSheet.create({
  btnSubjects: {
    width: '44%',
    marginBottom: 30,
    alignItems: 'center',
    paddingHorizontal: 30,
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: 5,
    height: 70,
    borderWidth: 2,
    borderColor: '#c5c5c5',
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'space-around',
  },
  btnSubjectsText: {
    fontSize: 16,
    textTransform: 'uppercase',
    ...Fonts.textMedium,
    color: '#212529',
  },
  activeSubject: {
    borderColor: '#1FC59F',
  },
  activeText: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#1FC59F',
    ...Fonts.textMedium,
  },
});
