/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {DrawerContent, createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from '../../screen/deliveryScreen/components/homePage';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props: any) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home Page" component={HomePage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
