import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {deliveryScreenStyles} from '../style';

const BackgroundScreen = (props: any) => {
  const {children} = props;
  return (
    <>
      <LinearGradient
        colors={['#f5e3df', '#fff']}
        start={{x: 1.6, y: 0.2}}
        end={{x: 1, y: 1.3}}
        locations={[0, 5]}
        style={deliveryScreenStyles.bgContainer}>
        {children}
      </LinearGradient>
    </>
  );
};

export default BackgroundScreen;
