/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const FoodCard = ({item, navigation}: any) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={1}
      onPress={() => navigation.navigate('Food Details')}>
      <Image source={item?.image} style={styles.cardImage} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{item?.title}</Text>
        <View style={styles.starSection}>
          <Image
            source={require('../../assets/ratingStar.png')}
            style={styles.starImage}
          />
          <Image
            source={require('../../assets/ratingStar.png')}
            style={styles.starImage}
          />
          <Image
            source={require('../../assets/ratingStar.png')}
            style={styles.starImage}
          />
          <Image
            source={require('../../assets/ratingStar.png')}
            style={styles.starImage}
          />
          <Image
            source={require('../../assets/ratingStar.png')}
            style={styles.starImage}
          />
        </View>
        <View style={styles.cardDetails}>
          <Text style={styles.cardDelivery}>{item?.distance} km</Text>
          <View style={styles.dotStyle}></View>
          <Text style={styles.cardDelivery}>{item?.time} min delivery</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const FoodList = (props: any) => {
  const {foodData, navigation} = props;
  return (
    <FlatList
      data={foodData}
      keyExtractor={item => item?.id.toString()}
      renderItem={({item}) => <FoodCard item={item} navigation={navigation} />}
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
  },
  cardImage: {
    width: 160,
    height: 160,
    resizeMode: 'center',
  },
  starSection: {
    flexDirection: 'row',
    gap: 5,
    marginVertical: 5,
  },
  starImage: {
    width: 13,
    height: 13,
  },
  cardInfo: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    color: '#02111a',
    fontWeight: '500',
    marginBottom: 5,
  },
  cardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardRating: {
    fontSize: 16,
  },
  cardDelivery: {
    fontSize: 16,
    color: 'gray',
  },
  dotStyle: {
    backgroundColor: '#FF6F61',
    width: 6,
    height: 6,
    borderRadius: 3,
    marginLeft: 10,
    marginRight: 6,
  },
});

export default FoodList;
