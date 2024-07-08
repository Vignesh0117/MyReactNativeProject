// screens/FavoritesScreen.js
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import BackgroundScreen from './backgroundScreen';

const FavoritesScreen = () => {
  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Favorite Foods</Text>
        <View>
          <Image
            source={require('../../../assets/emptyFavo.png')}
            style={styles.favoImg}
          />
        </View>
      </View>
    </BackgroundScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#02111a',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  item: {
    padding: 15,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
  },

  favoImg: {
    width: 350,
    height: 350,
    marginTop: 100,
  },
});

export default FavoritesScreen;
