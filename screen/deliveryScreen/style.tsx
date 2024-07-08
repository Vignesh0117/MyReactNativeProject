import {StyleSheet} from 'react-native';

export const deliveryScreenStyles = StyleSheet.create({
  root: {
    flex: 2.3,
  },

  title: {
    fontSize: 20,
    color: '#02111A',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
  },

  bgContainer: {
    flex: 1,
  },

  footerBtn: {
    marginHorizontal: 20,
  },

  getButton: {
    backgroundColor: '#ed714d',
    padding: 18,
    borderRadius: 45,
    marginBottom: 10,
  },

  getText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },

  textSection: {
    flex: 1,
  },

  homeTitle: {
    fontSize: 38,
    color: '#02111a',
    fontWeight: 'semibold',
    textAlign: 'center',
    marginHorizontal: 50,
    fontFamily: 'sans-serif-medium',
  },

  homeSubTitle: {
    fontSize: 18,
    color: '#a0a0a0',
    fontWeight: '400',
    textAlign: 'center',
    marginHorizontal: 50,
    fontFamily: 'sans-serif',
    marginTop: 18,
  },

  toolBarStyle: {
    flex: 0.4,
    position: 'relative',
  },

  // Body Content Style

  bodyRootSx: {
    marginHorizontal: 20,
    marginTop: 7,
  },

  bodyTitle: {
    fontSize: 36,
    color: '#02111a',
    fontWeight: '500',
    marginRight: 40,
  },

  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },

  bodyHeaderTitle: {
    fontSize: 25,
    color: '#02111a',
    fontWeight: '500',
  },

  bodyHeaderEnd: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '500',
  },
});
