/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  Modal,
  ScrollView,
  DrawerLayoutAndroid,
} from 'react-native';

const Toolbar = (props: any) => {
  const {
    profileImage,
    countryData,
    countryState,
    modalState,
    handleSelectCountry,
    handleModalOpen,
    handleModalClose,
    children,
    bodyContent,
    drawer,
  } = props;

  const navigationView = () => (
    <View style={styles.containerSx}>
      <TouchableOpacity
        onPress={() => drawer.current?.closeDrawer()}
        style={styles.closeStyleSx}>
        <Image
          source={require('../../assets/closeIcon.png')}
          style={styles.closeStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.profileStyle}>
        <Image source={profileImage} style={styles.profileImage} />
        <View>
          <Text style={styles.nameStyle}>Shahinur Rahman</Text>
          <Text style={styles.roleStyle}>Admin</Text>
        </View>
      </View>
      <View style={styles.bodyStyle}>{children}</View>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
      drawerBackgroundColor={'#f7f3f1'}>
      <View style={styles.rootContainer}>
        <View style={styles.container}>
          <Image source={profileImage} style={styles.profileImage} />
          <TouchableOpacity
            style={styles.picker}
            activeOpacity={1}
            onPress={handleModalOpen}>
            <View style={styles.locImageStyle}>
              <Image
                source={require('../../assets/locationBlack.png')}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.countryCode}>{countryState?.label}</Text>
            <View style={styles.imageStyle}>
              <Image
                source={require('../../assets/Vector.png')}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuIcon}
            onPress={() => {
              drawer.current?.openDrawer();
            }}>
            <Image
              source={require('../../assets/menuIcon.png')}
              style={styles.menuImage}
              resizeMode="contain"
            />
          </TouchableOpacity>

          {/* Modal for country */}
          <Modal
            transparent={true}
            visible={modalState}
            onRequestClose={handleModalClose}>
            <TouchableOpacity
              style={styles.modalOverlay}
              activeOpacity={1}
              onPressOut={handleModalClose}>
              <View style={styles.modalContent}>
                <ScrollView>
                  {countryData?.map((val: any, i: number) => (
                    <TouchableOpacity
                      key={i}
                      style={styles.modalItem}
                      onPress={() => handleSelectCountry(val)}>
                      <Text style={{fontSize: 20, color: 'black'}}>
                        {val?.value}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </TouchableOpacity>
          </Modal>
        </View>
        <View>{bodyContent}</View>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  containerSx: {
    flex: 1,
    padding: 16,
  },

  closeStyleSx: {
    alignItems: 'flex-end',
  },

  closeStyle: {
    width: 20,
    height: 20,
  },

  profileStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginVertical: 30,
    borderBottomWidth: 1,
    borderColor: '#dbdae1',
    paddingBottom: 30,
  },

  nameStyle: {
    fontSize: 22,
    color: '#02111a',
    fontWeight: '600',
  },

  roleStyle: {
    fontSize: 16,
    color: 'gray',
  },

  bodyStyle: {
    marginTop: 10,
    flex: 1,
  },

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
    width: 15,
    height: 15,
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

export default Toolbar;
