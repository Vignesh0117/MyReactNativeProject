import {StyleSheet} from 'react-native';

export const commonPageStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF',
    gap: 10,
    marginTop: 40,
  },

  title: {
    fontSize: 20,
    color: '#02111A',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
  },

  buttonSection: {
    flex: 2,
    paddingHorizontal: 16,
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },

  buttonStyleSx: {
    height: 40,
  },
});
