/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {DrawerContent, createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import BottomBar from '../../screen/deliveryScreen/components/bottomBar';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props: any) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Bottom Bar" component={BottomBar} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
