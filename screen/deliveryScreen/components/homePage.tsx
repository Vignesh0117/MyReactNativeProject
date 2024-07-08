import React, {useState} from 'react';
import {deliveryScreenStyles} from '../style';
import BackgroundScreen from './backgroundScreen';
import {chipData, menuData} from '../utils';
import {View} from 'react-native';
import HomeBodyComponent from './homeBodyContent';
import DrawerHeader from '../../../components/homePageHeader';
import {useNavigation} from '@react-navigation/native';
import DrawerComponent from '../../../components/drawer';
import DrawerBody from './drawerBody';

const countryData = [
  {label: 'Canada', value: 'Canada'},
  {label: 'India', value: 'India'},
  {label: 'Australia', value: 'Australia'},
];

const HomePage = () => {
  const navigation: any = useNavigation();

  const [formData, setFormData] = useState({
    country: {
      label: countryData[0]?.label,
      value: countryData[0]?.value,
    },
    modalVisible: false,
  });
  const [selectedChip, setSelectedChip] = useState(chipData[0]?.id);
  const [open, setOpen] = React.useState(false);

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

  // const handleSelectCountry = (val: any) => {
  //   setFormData({
  //     ...formData,
  //     country: {
  //       label: val?.label,
  //       value: val?.value,
  //     },
  //   });
  // };

  const navigateTo = (item: any) => {
    navigation.navigate(item?.route);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleChipPress = (item: any) => {
    setSelectedChip(item?.id);
  };

  return (
    <BackgroundScreen>
      <DrawerComponent
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        drawerContent={
          <DrawerBody
            menuData={menuData}
            navigateTo={navigateTo}
            closeDrawer={closeDrawer}
          />
        }>
        <View style={deliveryScreenStyles.toolBarStyle}>
          <DrawerHeader
            // handleSelectCountry={handleSelectCountry}
            handleModalClose={handleModalClose}
            handleModalOpen={handleModalOpen}
            countryState={formData?.country}
            // countryData={countryData}
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
      </DrawerComponent>
    </BackgroundScreen>
  );
};

export default HomePage;
