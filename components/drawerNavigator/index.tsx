/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomTabNavigator from '../../screen/deliveryScreen/components/bottomBarNavigator';
import RegisterPage from '../../screen/registerPage';
import MerchantScreen from '../../screen/merchantScreen';
import DeliveryScreen from '../../screen/deliveryScreen';
import DrawerBody from '../../screen/deliveryScreen/components/drawerBody';
import CommonPage from '../../screen/commonScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props: any) => <DrawerBody {...props} />}>
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Home Common"
        component={CommonPage}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Register Page"
        component={RegisterPage}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Merchant Details"
        component={MerchantScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Delivery Home"
        component={DeliveryScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}
