import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterPage from './screen/registerPage';
import CommonPage from './screen/commonScreen';
import MerchantScreen from './screen/merchantScreen';

export default function NavigationRoot() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={CommonPage}
          options={{statusBarColor: 'lightgreen', headerShown: false}}
        />
        <Stack.Screen
          name="Register Page"
          options={{headerShown: false}}
          component={RegisterPage}
        />
        <Stack.Screen
          name="Merchant Details"
          options={{headerShown: false}}
          component={MerchantScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
