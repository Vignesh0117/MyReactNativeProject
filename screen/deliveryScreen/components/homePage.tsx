import React, {useState} from 'react';
import {deliveryScreenStyles} from '../style';
import BackgroundScreen from './backgroundScreen';
import {chipData} from '../utils';
import {StatusBar, View} from 'react-native';
import HomeBodyComponent from './homeBodyContent';
import DrawerHeader from '../../../components/homePageHeader';
import {useNavigation} from '@react-navigation/native';

const countryData = [
  {label: 'Canada', value: 'Canada'},
  {label: 'India', value: 'India'},
  {label: 'Australia', value: 'Australia'},
];

const HomePage = () => {
  const navigation: any = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

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

  const handleChipPress = (item: any) => {
    setSelectedChip(item?.id);
  };

  return (
    <BackgroundScreen>
      <StatusBar backgroundColor={'#f5e3df'} />
      <View style={deliveryScreenStyles.toolBarStyle}>
        <DrawerHeader
          handleModalClose={handleModalClose}
          handleModalOpen={handleModalOpen}
          countryState={formData?.country}
          profileImage={require('../../../assets/dummyAvatar.png')}
          modalState={formData?.modalVisible}
          handleDrawerOpen={openDrawer}
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
