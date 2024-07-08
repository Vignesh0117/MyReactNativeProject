import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import BackgroundScreen from './backgroundScreen';

const initialCart = [
  {id: '1', name: 'Pizza', price: 12.99, quantity: 1},
  {id: '2', name: 'Burger', price: 8.99, quantity: 2},
  {id: '3', name: 'Pasta', price: 10.99, quantity: 1},
];

const CartPage = () => {
  const [cart, setCart] = useState(initialCart);

  const increaseQuantity = (id: any) => {
    setCart(
      cart.map(item =>
        item.id === id ? {...item, quantity: item.quantity + 1} : item,
      ),
    );
  };

  const decreaseQuantity = (id: any) => {
    setCart(
      cart.map(item =>
        item.id === id && item.quantity > 1
          ? {...item, quantity: item.quantity - 1}
          : item,
      ),
    );
  };

  const removeItem = (id: any) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const renderItem = ({item}: any) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={() => decreaseQuantity(item.id)}
          style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity
          onPress={() => increaseQuantity(item.id)}
          style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => removeItem(item.id)}
          style={[styles.button, styles.removeButton]}>
          <Text style={[styles.buttonText, styles.removeButtonText]}>
            Remove
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <BackgroundScreen>
      <Text style={styles.title}>Cart Page</Text>
      <SafeAreaView style={styles.container}>
        {cart?.length > 0 ? (
          <>
            <FlatList
              data={cart}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
            </View>
          </>
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Your cart is empty</Text>
          </View>
        )}
      </SafeAreaView>
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    color: 'black',
  },
  price: {
    fontSize: 18,
    color: 'black',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 18,
    color: 'black',
  },
  removeButton: {
    backgroundColor: 'red',
  },
  removeButtonText: {
    color: 'white',
  },
  totalContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    color: 'black',
  },
});

export default CartPage;
