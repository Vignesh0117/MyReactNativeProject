import React, {useState, useRef} from 'react';
import {deliveryScreenStyles} from '../style';
import BackgroundScreen from './backgroundScreen';
import {chipData} from '../utils';
import {DrawerLayoutAndroid, View} from 'react-native';
import HomeBodyComponent from './homeBodyContent';
import DrawerHeader from '../../../components/homePageHeader';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const countryData = [
  {label: 'Canada', value: 'Canada'},
  {label: 'India', value: 'India'},
  {label: 'Australia', value: 'Australia'},
];

const HomePage = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    country: {
      label: countryData[0]?.label,
      value: countryData[0]?.value,
    },
    modalVisible: false,
  });
  const [selectedChip, setSelectedChip] = useState(chipData[0]?.id);

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

  const handleSelectCountry = (val: any) => {
    setFormData({
      ...formData,
      country: {
        label: val?.label,
        value: val?.value,
      },
    });
  };

  // const navigateTo = (item: any) => {
  //   navigation.navigate(item?.route);
  //   drawer.current?.closeDrawer();
  // };

  const handleDrawerOpen = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const handleChipPress = (item: any) => {
    setSelectedChip(item?.id);
  };

  return (
    <BackgroundScreen>
      <View style={deliveryScreenStyles.toolBarStyle}>
        {/* <Toolbar
          profileImage={require('../../../assets/dummyAvatar.png')}
          modalState={formData?.modalVisible}
          countryState={formData?.country}
          countryData={countryData}
          drawer={drawer}
          handleModalOpen={handleModalOpen}
          handleModalClose={handleModalClose}
          handleSelectCountry={handleSelectCountry}
          children={<DrawerBody menuData={menuData} navigateTo={navigateTo} />}
          bodyContent={
            <HomeBodyComponent
              title="Ready to order your favorite food?"
              foodHeaderText="Popular Food"
              foodHeaderEnd="See all"
              chipState={selectedChip}
              handleChipPress={handleChipPress}
              navigation={navigation}
            />
          }
        /> */}
        <DrawerHeader
          handleSelectCountry={handleSelectCountry}
          handleModalClose={handleModalClose}
          handleModalOpen={handleModalOpen}
          countryState={formData?.country}
          countryData={countryData}
          profileImage={require('../../../assets/dummyAvatar.png')}
          modalState={formData?.modalVisible}
          handleDrawerOpen={handleDrawerOpen}
        />
      </View>
      <HomeBodyComponent
        title="Ready to order your favorite food?"
        foodHeaderText="Popular Food"
        foodHeaderEnd="See all"
        chipState={selectedChip}
        handleChipPress={handleChipPress}
        navigation={navigation}
      />
    </BackgroundScreen>
  );
};

export default HomePage;
