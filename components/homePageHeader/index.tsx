import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';

function DrawerHeader(props: any) {
  const {
    profileImage,
    handleModalOpen,
    countryState,
    handleDrawerOpen,
    // handleModalClose,
    // modalState,
    // handleSelectCountry,
    // countryData,
  } = props;
  return (
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
              source={require('../../assets/dropdown.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuIcon} onPress={handleDrawerOpen}>
          <Image
            source={require('../../assets/menuIcon.png')}
            style={styles.menuImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Modal for country */}
        {/* <Modal
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
        </Modal> */}
      </View>
    </View>
  );
}

export default DrawerHeader;
