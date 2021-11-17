import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: 'aqua',
    paddingVertical: 15,
  },
  footer: {
    backgroundColor: '#e7e7e7',
    paddingVertical: 15,
  },
  textHeader: {
    textAlign: 'center',
    fontWeight: '700',
  },
  textFooter: {
    textAlign: 'center',
    fontWeight: '400',
    fontStyle: 'italic',
  }
});

export default styles;
