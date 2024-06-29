import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },

  topBarStyle: {
    backgroundColor: '#fff',
    marginTop: 30,
  },

  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginBottom: 16,
  },

  productCardSection: {
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
    paddingBottom: 18,
    marginBottom: 12,
  },

  imageStyle: {
    width: 55,
    height: 55,
    borderRadius: 12,
    marginRight: 14,
  },

  infoRow: {
    marginTop: 8,
  },

  // Store details style

  storeDetails: {
    marginBottom: 15,
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
    gap: 18,
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
    borderColor: 'lightgray',
  },

  chipText: {
    fontSize: 16,
    fontWeight: '600',
  },

  //  section two

  list: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 16,
  },

  headerTextSection: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginRight: 14,
  },

  comboTextSx: {
    fontSize: 17,
    width: 180,
  },

  comboContainerSx: {
    paddingBottom: 25,
  },

  // footer style

  footerSection: {
    backgroundColor: '#FFFF',
    paddingHorizontal: 16,
  },

  floatingButton: {
    flexDirection: 'row',
    backgroundColor: '#c8361e',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
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
    backgroundColor: '#ecb2ac',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 20,
  },
});
