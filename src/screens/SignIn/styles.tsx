import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themes.colors.background
  },
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    color: themes.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,
  },
  subtitle: {
    color: themes.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64,
  }

})