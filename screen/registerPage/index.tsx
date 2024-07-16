/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomTextInput from '../../components/textInput';
import MobileInput from '../../components/mobileInput';
import TopBar from '../../components/topBar';

const countryCodes = [
  {code: '+1', image: require('../../assets/usFlag.png')},
  {code: '+91', image: require('../../assets/indiaFlag.png')},
  {code: '+44', image: require('../../assets/canadaFlag.png')},
];

const RegisterPage = ({navigation}: any) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    street: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    countryCode: countryCodes[1]?.code,
    mobileNumber: '9876543456',
    modalVisible: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    address: '',
    street: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
  });

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleChangeText = (key: string, value: any) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleModalOpen = () => {
    setFormData({
      ...formData,
      modalVisible: true,
    });
  };

  const handleModalClose = () => {
    setFormData({
      ...formData,
      modalVisible: false,
    });
  };

  const handleSelectCountryCode = (code: any) => {
    setFormData({
      ...formData,
      countryCode: code,
    });
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {
      name: '',
      email: '',
      address: '',
      street: '',
      city: '',
      state: '',
      country: '',
      pincode: '',
    };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!formData.address) {
      newErrors.address = 'Address is required';
      isValid = false;
    }

    if (!formData.street) {
      newErrors.street = 'Street is required';
      isValid = false;
    }

    if (!formData.city) {
      newErrors.city = 'City is required';
      isValid = false;
    }

    if (!formData.state) {
      newErrors.state = 'State is required';
      isValid = false;
    }

    if (!formData.country) {
      newErrors.country = 'Country is required';
      isValid = false;
    }

    if (!formData.pincode) {
      newErrors.pincode = 'Pincode is required';
      isValid = false;
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Pincode is invalid';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleRegister = () => {
    const resetForm = () => {
      setFormData({
        name: '',
        email: '',
        address: '',
        street: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        countryCode: countryCodes[1]?.code,
        mobileNumber: '9876543456',
        modalVisible: false,
      });

      setErrors({
        name: '',
        email: '',
        address: '',
        street: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
      });
    };
    if (validateForm()) {
      Alert.alert('Register successfully!');
      resetForm();
    }
  };

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
      <StatusBar backgroundColor={'#D6EFE7'} />
      <TopBar
        title="Register Page"
        handleBackPress={handleBackPress}
        rootStyle={styles.topBarStyle}
      />
      <View style={styles.innerBox}>
        <View style={styles.top}>
          <Image source={require('../../assets/Group.png')} />
          <CustomTextComponent style={styles.bannerTextStyle}>
            Earn loyalty for every purchase
          </CustomTextComponent>
        </View>
        <View style={styles.center}>
          <View style={styles.fieldsStyle}>
            <CustomTextComponent style={styles.headerTextStyle}>
              Profile details
            </CustomTextComponent>
            <CustomTextComponent style={styles.subTextStyle}>
              Login/ Signin with your mobile number to proceed further
            </CustomTextComponent>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.scrollViewContentContainer}
              showsVerticalScrollIndicator={false}>
              <CustomTextInput
                value={formData.name}
                onChangeText={(text: any) => handleChangeText('name', text)}
                placeholder="Name"
                keyboardType="default"
                editable={true}
                inputMode="text"
                error={errors?.name}
                style={styles.input}
              />
              <View style={styles.inputContainerStyle}>
                <MobileInput
                  countryCodesData={countryCodes}
                  countryCodeState={formData.countryCode}
                  mobileNumberState={formData.mobileNumber}
                  modalState={formData.modalVisible}
                  setMobileNumberState={(text: any) =>
                    handleChangeText('mobileNumber', text)
                  }
                  handleModalOpen={handleModalOpen}
                  handleModalClose={handleModalClose}
                  handleSelectCountryCode={handleSelectCountryCode}
                  editable={false}
                />
              </View>

              <CustomTextInput
                value={formData.email}
                onChangeText={(text: any) => handleChangeText('email', text)}
                placeholder="Email"
                keyboardType="email-address"
                editable={true}
                inputMode="text"
                error={errors?.email}
                style={styles.input}
              />
              <CustomTextInput
                value={formData.address}
                onChangeText={(text: any) => handleChangeText('address', text)}
                placeholder="Address"
                keyboardType="default"
                editable={true}
                inputMode="text"
                error={errors?.address}
                style={styles.input}
                multiline={true}
                numberOfLines={4}
              />
              <CustomTextInput
                value={formData.street}
                onChangeText={(text: any) => handleChangeText('street', text)}
                placeholder="Street"
                keyboardType="default"
                editable={true}
                inputMode="text"
                error={errors?.street}
                style={styles.input}
              />
              <CustomTextInput
                value={formData.city}
                onChangeText={(text: any) => handleChangeText('city', text)}
                placeholder="City"
                keyboardType="default"
                editable={true}
                inputMode="text"
                error={errors?.city}
                style={styles.input}
              />
              <CustomTextInput
                value={formData.state}
                onChangeText={(text: any) => handleChangeText('state', text)}
                placeholder="State"
                keyboardType="default"
                editable={true}
                inputMode="text"
                error={errors?.state}
                style={styles.input}
              />
              <CustomTextInput
                value={formData.country}
                onChangeText={(text: any) => handleChangeText('country', text)}
                placeholder="Country"
                keyboardType="default"
                editable={true}
                inputMode="text"
                error={errors?.country}
                style={styles.input}
              />
              <CustomTextInput
                value={formData.pincode}
                onChangeText={(text: any) => handleChangeText('pincode', text)}
                placeholder="Pincode"
                keyboardType="numeric"
                editable={true}
                inputMode="numeric"
                error={errors?.pincode}
                style={styles.input}
              />
            </ScrollView>
          </View>
          <View style={styles.bottom}>
            <Text
              style={styles.buttonStyle}
              // onPress={() => Alert.alert('Register successfully!')}
              onPress={handleRegister}>
              Register
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6EFE7',
  },

  innerBox: {
    flex: 1,
  },

  topBarStyle: {
    paddingHorizontal: 16,
    backgroundColor: '#D6EFE7',
  },

  top: {
    flex: 1.6,
    backgroundColor: '#D6EFE7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bannerTextStyle: {
    width: 180,
    textAlign: 'center',
    fontSize: 14,
    color: '#02111A',
    marginTop: 12,
    fontFamily: 'Montserrat-Bold',
  },

  center: {
    flex: 3,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    position: 'relative',
  },

  fieldsStyle: {
    flex: 6.7,
  },

  headerTextStyle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#02111A',
    fontWeight: '600',
    marginTop: 24,
  },

  subTextStyle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#4E585E',
    fontWeight: '400',
    marginTop: 12,
    paddingLeft: 50,
    paddingRight: 50,
  },

  buttonStyle: {
    paddingVertical: 10,
    backgroundColor: '#30AF89',
    fontSize: 14,
    fontWeight: '600',
    color: '#FFF',
    borderRadius: 8,
    marginHorizontal: 16,
    textAlign: 'center',
    marginBottom: 20,
  },

  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },

  scrollView: {
    marginHorizontal: 16,
    marginVertical: 20,
    flexDirection: 'column',
  },

  input: {
    marginBottom: 16,
  },

  inputContainerStyle: {
    marginBottom: 16,
  },

  scrollViewContentContainer: {
    paddingBottom: 50,
  },
});

export default RegisterPage;
