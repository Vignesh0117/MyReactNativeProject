import React from 'react';
import {Text, StyleSheet} from 'react-native';
import BackgroundScreen from './backgroundScreen';
import {Image} from 'react-native';

const CartPage = () => {
  return (
    <BackgroundScreen>
      <Text style={styles.title}>Cart Page</Text>
      <Image
        source={require('../../../assets/emptyshop.png')}
        style={styles.favoImg}
      />
    </BackgroundScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#02111a',
    marginVertical: 20,
    paddingHorizontal: 16,
  },

  favoImg: {
    width: 350,
    height: 350,
    marginHorizontal: 16,
    marginTop: 100,
  },
});

export default CartPage;
