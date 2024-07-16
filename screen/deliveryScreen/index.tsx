import React from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {deliveryScreenStyles} from './style';
import BackgroundScreen from './components/backgroundScreen';
import PositionImage from './components/positionImage';
import {iamgeData} from './utils';
import {useNavigation} from '@react-navigation/native';

const DeliveryScreen = () => {
  const navigation: any = useNavigation();

  return (
    <BackgroundScreen>
      <StatusBar backgroundColor={'#f5e3df'} />
      <View style={deliveryScreenStyles.root}>
        <PositionImage imageData={iamgeData} />
      </View>
      <View style={deliveryScreenStyles.textSection}>
        <Text style={deliveryScreenStyles.homeTitle}>
          Taste the Joy of Delivery
        </Text>
        <Text style={deliveryScreenStyles.homeSubTitle}>
          Unlock a world of culinary delights right at your fingertips
        </Text>
      </View>
      <View style={deliveryScreenStyles.footerBtn}>
        <TouchableOpacity
          activeOpacity={1}
          style={deliveryScreenStyles.getButton}
          onPress={() => navigation.navigate('Bottom Bar')}>
          <Text style={deliveryScreenStyles.getText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </BackgroundScreen>
  );
};

export default DeliveryScreen;
