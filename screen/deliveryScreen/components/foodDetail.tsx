// export default FoodDetails;
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FoodDetails = ({navigation}: any) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('Small');

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name={'arrow-back'}
          size={24}
          color={'#02111a'}
          style={{
            backgroundColor: '#FFF',
            padding: 12,
            borderRadius: 20,
          }}
          onPress={() => {
            navigation.navigate('Bottom Bar');
          }}
        />
        <Text
          style={{
            fontSize: 20,
            color: '#02111a',
            fontWeight: '500',
          }}>
          Details
        </Text>
        <Icon
          name={'heart'}
          size={22}
          color={'#02111a'}
          style={{
            backgroundColor: '#FFF',
            padding: 12,
            borderRadius: 20,
          }}
          onPress={() => {
            Alert.alert('Food added to favoites');
          }}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.divideSection}>
          <View>
            <Text style={styles.title}>Biryani Bliss</Text>
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Image
                source={require('../../../assets/ratingStar.png')}
                style={styles.starImage}
              />
              <Text style={styles.rating}>4.8 (105 review)</Text>
            </View>
            <Text style={styles.price}>Price</Text>
            <Text style={styles.title}>$7.50</Text>
            <Text style={styles.calories}>Calories</Text>
            <Text style={{fontSize: 16, color: '#02111a', marginTop: 6}}>
              450 Cal
            </Text>
            <Text style={styles.calories}>Diameter</Text>
            <Text style={{fontSize: 16, color: '#02111a', marginTop: 6}}>
              15.05 cm
            </Text>
          </View>
          <View style={styles.imageBox}>
            <Image
              source={require('../../../assets/delivery5.png')}
              style={styles.image}
            />
          </View>
        </View>
        <View style={styles.quantityContainer}>
          <Icon
            name={'remove-outline'}
            size={20}
            color={'#FFF'}
            style={{
              backgroundColor: '#FF7F50',
              padding: 8,
              borderRadius: 20,
            }}
            onPress={decrementQuantity}
          />
          <Text style={styles.quantity}>
            {quantity > 9 ? quantity : `0${quantity}`}
          </Text>
          <Icon
            name={'add'}
            size={20}
            color={'#FFF'}
            style={{
              backgroundColor: '#FF7F50',
              padding: 8,
              borderRadius: 20,
            }}
            onPress={incrementQuantity}
          />
        </View>
        <Text style={styles.size}>Size</Text>
        <View style={styles.sizeContainer}>
          {['Small', 'Medium', 'Large'].map(item => (
            <TouchableOpacity
              key={item}
              style={[
                styles.sizeButton,
                size === item && styles.selectedSizeButton,
              ]}
              onPress={() => setSize(item)}>
              <Text style={size === item ? styles.colorText : styles.sizeText}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.description} numberOfLines={5} ellipsizeMode="tail">
          Hyderabadi Biryani is a culinary masterpiece that tantalizes the
          senses with its aromatic spices, tender meat, and fragrant basmati
          rice. Originating from the vibrant culinary masterpiece that
          tantalizes the senses city of Hyderabad in India, this iconic dish
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            Alert.alert('Food added to cart');
          }}
          activeOpacity={1}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  starImage: {
    width: 13,
    height: 13,
  },
  image: {
    width: 450,
    height: 450,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#0a111a',
  },
  rating: {
    color: 'gray',
    marginVertical: 8,
  },
  size: {
    fontSize: 16,
    fontWeight: '400',
    color: 'gray',
    marginVertical: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '400',
    color: 'gray',
    marginTop: 10,
  },
  calories: {
    fontSize: 16,
    fontWeight: '400',
    color: 'gray',
    marginTop: 20,
  },
  diameter: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  quantity: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 16,
    color: '#02111a',
  },
  footer: {
    padding: 16,
  },
  addButton: {
    backgroundColor: '#FF6347',
    borderRadius: 35,
    padding: 23,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  divideSection: {
    flexDirection: 'row',
    position: 'relative',
    marginTop: 20,
  },
  imageBox: {
    position: 'absolute',
    right: -80,
    top: -25,
    width: '100%',
  },
  sizeContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  sizeButton: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  selectedSizeButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 8,
    paddingHorizontal: 25,
  },
  colorText: {
    fontSize: 18,
    color: '#FFF',
  },
  sizeText: {
    fontSize: 18,
    color: '#02111a',
  },
  description: {
    fontSize: 18,
    marginTop: 25,
    color: 'grey',
    lineHeight: 22,
  },
});

export default FoodDetails;
