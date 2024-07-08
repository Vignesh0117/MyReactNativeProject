/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const DrawerContent = ({navigation}: any) => {
  return (
    <DrawerContentScrollView>
      <View>
        <DrawerItem
          label="Dashboard"
          icon={({color, size}) => (
            <Icon name="ios-home" color={color} size={size} />
          )}
          onPress={() => navigation.navigate('Home')}
        />
        <DrawerItem
          label="Get Started Page"
          icon={({color, size}) => (
            <Icon name="ios-settings" color={color} size={size} />
          )}
          onPress={() => navigation.navigate('Delivery Home')}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
