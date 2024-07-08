/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import NavigationRoot from './navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const YourApp = () => {
  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationRoot />
      </GestureHandlerRootView>
    </>
  );
};

export default YourApp;
