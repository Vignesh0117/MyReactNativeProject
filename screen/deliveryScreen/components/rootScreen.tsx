import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomBar from './bottomBar';

export default function RootScreen() {
  return (
    <NavigationContainer>
      <BottomBar />
    </NavigationContainer>
  );
}
