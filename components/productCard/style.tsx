import {StyleSheet} from 'react-native';

export const productCardStyle = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
  },

  detailsStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 5,
  },

  titleStyleSx: {
    fontSize: 22,
    color: '#02111A',
    fontWeight: '600',
  },

  descriptionBoxStyle: {
    flexDirection: 'row',
    gap: 4,
  },

  descriptionIconStyle: {
    width: 15,
    height: 16,
  },

  descriptionStyleSx: {
    fontSize: 15,
    color: '#9da1a1',
    fontWeight: '400',
  },

  amountStyleSx: {
    fontSize: 16,
    color: '#f3c066',
    fontWeight: '800',
  },
});
