import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {deliveryScreenStyles} from './style';
import BackgroundScreen from './components/backgroundScreen';
import PositionImage from './components/positionImage';
import {iamgeData} from './utils';

const DeliveryScreen = (props: any) => {
  const {} = props;

  return (
    <BackgroundScreen>
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
          onPress={() => props.navigation.navigate('Bottom Bar')}>
          <Text style={deliveryScreenStyles.getText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </BackgroundScreen>
  );
};

export default DeliveryScreen;
