import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const TopBar = (props: any) => {
  const {title, rootStyle, titleStyle, handleBackPress} = props;

  return (
    <View style={[styles.container, rootStyle]}>
      <TouchableOpacity
        onPress={handleBackPress}
        activeOpacity={1}
        style={styles.backButton}>
        <Image
          source={require('../../assets/backIcon.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#f8f8f8',
  },
  backButton: {
    marginRight: 10,
    marginLeft: -8,
  },
  title: {
    fontSize: 20,
    color: '#02111A',
    fontWeight: '500',
  },
});

export default TopBar;
