import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {commonPageStyles} from './style';
import CustomButton from '../../components/button';

const CommonPage = ({navigation}: any) => {
  return (
    <View style={commonPageStyles.root}>
      <StatusBar backgroundColor={'#FFF'} />
      <Text style={commonPageStyles.title}>My React Native Task's</Text>
      <SafeAreaView style={commonPageStyles.buttonSection}>
        <CustomButton
          title="Register Page"
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Register Page')}
          buttonStyleSx={commonPageStyles.buttonStyleSx}
        />
        <CustomButton
          title="Merchant Page"
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Merchant Details')}
          buttonStyleSx={commonPageStyles.buttonStyleSx}
        />
        <CustomButton
          title="Delivery Page"
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Delivery Home')}
          buttonStyleSx={commonPageStyles.buttonStyleSx}
        />
      </SafeAreaView>
    </View>
  );
};

export default CommonPage;
