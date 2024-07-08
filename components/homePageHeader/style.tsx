import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 23,
    backgroundColor: '#f1dad3',
    resizeMode: 'contain',
  },

  menuIcon: {
    backgroundColor: '#f7f7f7',
    padding: 10,
    borderRadius: 40,
    width: 50,
    height: 50,
  },

  menuImage: {
    width: '100%',
    height: '100%',
  },

  imageStyle: {
    width: 25,
    height: 25,
    marginLeft: 8,
  },

  locImageStyle: {
    width: 20,
    height: 20,
    marginRight: 8,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  picker: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },

  countryCode: {
    fontSize: 20,
    fontWeight: '500',
    color: '#02111A',
    fontFamily: 'Roboto-Bold',
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalContent: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
  },

  modalItem: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
