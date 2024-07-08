/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomePage from './homePage';
import FavoritesScreen from './favoriteScreen';
import CartPage from './cartPage';
import Notifications from './notification';

const Tab = createBottomTabNavigator();

export default function BottomBar() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}: any) => ({
          tabBarIcon: ({focused, color, size}: any) => {
            let iconName: any;

            if (route.name === 'Home Page') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Favorite') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            }

            return (
              <Icon
                name={iconName}
                size={size}
                color={color}
                style={{
                  backgroundColor: focused ? '#FF7F50' : '',
                  padding: 8,
                  borderRadius: 20,
                }}
              />
            );
          },
          tabBarActiveTintColor: '#FFF',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            height: 90,
            paddingBottom: 10,
            paddingTop: 10,
            marginHorizontal: 8,
            marginBottom: 8,
            borderRadius: 40,
            backgroundColor: '#FFFFFF',
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowRadius: 10,
            elevation: 1,
            shadowOffset: {
              width: 0,
              height: 5,
            },
          },
        })}
        sceneContainerStyle={{backgroundColor: 'transparent'}}>
        <Tab.Screen
          name="Home Page"
          component={HomePage}
          options={{headerShown: false, tabBarShowLabel: false}}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoritesScreen}
          options={{headerShown: false, tabBarShowLabel: false}}
        />
        <Tab.Screen
          name="Cart"
          component={CartPage}
          options={{headerShown: false, tabBarShowLabel: false}}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{headerShown: false, tabBarShowLabel: false}}
        />
      </Tab.Navigator>
    </>
  );
}
