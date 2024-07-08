import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterPage from './screen/registerPage';
import CommonPage from './screen/commonScreen';
import MerchantScreen from './screen/merchantScreen';
import DeliveryScreen from './screen/deliveryScreen';
import BottomBar from './screen/deliveryScreen/components/bottomBar';
import FoodDetails from './screen/deliveryScreen/components/foodDetail';
import FavoritesScreen from './screen/deliveryScreen/components/favoriteScreen';
import CartPage from './screen/deliveryScreen/components/cartPage';
import Notifications from './screen/deliveryScreen/components/notification';
import HomePage from './screen/deliveryScreen/components/homePage';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export default function NavigationRoot() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
      // initialRouteName="Bottom Bar"
      >
        <Stack.Screen
          name="Home"
          component={CommonPage}
          options={{headerShown: false}}
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
        <Stack.Screen
          name="Delivery Home"
          options={{headerShown: false}}
          component={DeliveryScreen}
        />
        <Stack.Screen
          name="Bottom Bar"
          options={{headerShown: false}}
          component={BottomBar}
        />
        <Stack.Screen
          name="Home Page"
          options={{headerShown: false}}
          component={HomePage}
        />
        <Stack.Screen
          name="Food Details"
          options={{headerShown: false}}
          component={FoodDetails}
        />
        <Stack.Screen
          name="Favorite"
          options={{headerShown: false}}
          component={FavoritesScreen}
        />
        <Stack.Screen
          name="Cart"
          options={{headerShown: false}}
          component={CartPage}
        />
        <Stack.Screen
          name="Notifications"
          options={{headerShown: false}}
          component={Notifications}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
