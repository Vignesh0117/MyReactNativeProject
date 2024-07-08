import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const PositionImage = (props: any) => {
  const {imageData} = props;
  return (
    <View style={styles.imageRoot}>
      <View style={styles.image1Root}>
        <Image source={imageData?.image1} style={styles.image1} />
      </View>
      <View style={styles.image2Root}>
        <Image source={imageData?.image2} style={styles.image2} />
      </View>
      <View style={styles.image3Root}>
        <Image source={imageData?.image3} style={styles.image3} />
      </View>
      <View style={styles.image4Root}>
        <Image source={imageData?.image4} style={styles.image4} />
      </View>
      <View style={styles.image5Root}>
        <Image source={imageData?.image5} style={styles.image5} />
      </View>
      <View style={styles.image6Root}>
        <Image source={imageData?.image6} style={styles.image6} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageRoot: {
    position: 'relative',
  },

  image1Root: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 75,
    top: 45,
    left: -30,
  },

  image1: {
    width: 90,
    height: 90,
    resizeMode: 'center',
  },

  image2Root: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 150,
    top: 100,
    left: '23%',
  },

  image2: {
    width: 130,
    height: 130,
  },

  image3Root: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 37,
    borderRadius: 109,
    top: 200,
    left: -100,
  },

  image3: {
    width: 110,
    height: 130,
  },

  image4Root: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 75,
    top: 320,
    left: 105,
  },

  image4: {
    width: 90,
    height: 90,
  },

  image5Root: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 190,
    top: 250,
    right: -110,
  },

  image5: {
    width: 175,
    height: 175,
  },

  image6Root: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 130,
    top: 50,
    right: -115,
  },

  image6: {
    width: 113,
    height: 95,
  },
});

export default PositionImage;
