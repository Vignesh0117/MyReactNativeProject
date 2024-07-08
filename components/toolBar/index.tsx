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
      drawerBackgroundColor={'#f7f3f1'}></DrawerLayoutAndroid>
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
});

export default Toolbar;
