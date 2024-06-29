import React from 'react';
import {Text, View} from 'react-native';
import {commonPageStyles} from './style';
import CustomButton from '../../components/button';

const CommonPage = ({navigation}: any) => {
  return (
    <View style={commonPageStyles.root}>
      <Text style={commonPageStyles.title}>Common Page</Text>
      <View style={commonPageStyles.buttonSection}>
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
      </View>
    </View>
  );
};

export default CommonPage;
