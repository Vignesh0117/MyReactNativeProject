/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Text,
  Modal,
  ScrollView,
} from 'react-native';

const MobileInput = (props: any) => {
  const {
    countryCodesData,
    countryCodeState,
    mobileNumberState,
    setMobileNumberState,
    modalState,
    // handleModalOpen,
    handleModalClose,
    handleSelectCountryCode,
    editable = false,
  } = props;

  const CustomTextComponent = ({
    style,
    children,
  }: {
    style: any;
    children: React.ReactNode;
  }) => {
    return <Text style={style}>{children}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={editable ? styles.inputContainer : styles.disableStyle}>
        <View style={styles.imageContainer}>
          <Image
            source={
              countryCodesData?.find(
                (item: any) => item?.code === countryCodeState,
              )?.image
            }
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity
          style={styles.picker}
          activeOpacity={1}
          // onPress={handleModalOpen}
        >
          <Text style={styles.countryCode}>{countryCodeState}</Text>
          <View style={styles.imageStyle}>
            <Image
              source={require('../../assets/Vector.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <TextInput
          style={[styles.textInput, styles.textInputValue]}
          onChangeText={setMobileNumberState}
          value={mobileNumberState}
          placeholder={mobileNumberState !== '' ? '' : 'Mobile number'}
          keyboardType="phone-pad"
          editable={editable}
        />
        {mobileNumberState !== '' && (
          <CustomTextComponent
            style={[mobileNumberState && styles.placeholderText]}>
            Mobile Number
          </CustomTextComponent>
        )}
      </View>
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
              {countryCodesData?.map((code: any, i: number) => (
                <TouchableOpacity
                  key={i}
                  style={styles.modalItem}
                  onPress={() => handleSelectCountryCode(code)}>
                  <Text>{code?.code}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D9DBDD',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  disableStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#E6EAEB',
  },

  imageContainer: {
    width: 23,
    height: 23,
  },

  imageStyle: {
    width: 15,
    marginLeft: 8,
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
    borderRightWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
  },

  textInput: {
    height: 45,
    flex: 1,
    paddingLeft: 10,
  },

  textInputValue: {
    fontSize: 16,
    color: '#02111A',
    fontWeight: '500',
    marginTop: 5,
  },

  countryCode: {
    width: 30,
    fontSize: 16,
    fontWeight: '500',
    color: '#02111A',
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
    padding: 20,
  },

  modalItem: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  placeholderText: {
    position: 'absolute',
    left: 123,
    top: 5,
    fontSize: 14,
    color: '#4E585E',
  },
});

export default MobileInput;
