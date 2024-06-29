import {StyleSheet} from 'react-native';

export const merchantDetailsStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8fa',
    gap: 20,
  },

  topBarStyle: {
    backgroundColor: '#fff',
    marginTop: 20,
  },

  firstSection: {
    flex: 3.6,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 20,
  },

  imageStyle: {
    width: 55,
    height: 55,
    borderRadius: 12,
  },

  secondSection: {
    position: 'relative',
    flex: 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  productCardSection: {
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
    paddingBottom: 24,
    marginBottom: 24,
  },

  // Store details style

  storeDetails: {
    marginBottom: 20,
  },

  storeIcon: {
    width: 20,
    height: 20,
  },

  storeIconSection: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    marginBottom: 4,
  },

  title: {
    fontSize: 18,
    color: '#02111A',
    fontWeight: '600',
  },

  subText: {
    fontSize: 17,
    color: '#9da1a1',
    fontWeight: '500',
  },

  flatListStyle: {
    gap: 12,
  },

  // Chip style

  chipDetails: {
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8',
    paddingTop: 20,
    marginTop: 4,
  },

  chipIcon: {
    width: 20,
    height: 20,
  },

  chipContainer: {
    gap: 10,
  },

  chip: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
  },

  chipText: {
    fontSize: 16,
    fontWeight: '600',
  },

  // Second section

  headerTextSection: {
    flexDirection: 'row',
    gap: 5,
  },

  headerIcon: {
    width: 25,
    height: 25,
  },

  headerText: {
    fontSize: 20,
    color: '#02111A',
    fontWeight: '600',
  },

  comboImageStyle: {
    width: 75,
    height: 75,
    borderRadius: 12,
  },

  comboTextSx: {
    fontSize: 17,
    width: 180,
  },

  comboContainerSx: {
    paddingBottom: 61,
  },

  floatingButton: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#c8361e',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rightArrowStyle: {
    width: 20,
    height: 20,
  },

  totalAmountStyle: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: '600',
  },

  totalCountStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#c8361e',
    backgroundColor: '#ecb2ac',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 14,
  },
});
