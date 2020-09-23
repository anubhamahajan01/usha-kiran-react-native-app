import { StyleSheet } from 'react-native';
import { Colors } from 'App/Theme';

export default StyleSheet.create({
  Container: {
    // flex: 1,
    backgroundColor: Colors.dark,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLogo: {
    width: 38,
    height: 38,
  },
  headerIcon: {
    height: 24,
    width: 24,
  },
  backIcon: {
    height: 28,
    width: 28,
  },
});
