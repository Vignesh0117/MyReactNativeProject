// screens/FavoritesScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import BackgroundScreen from './backgroundScreen';

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([
    {id: '1', name: 'Pizza'},
    {id: '2', name: 'Burger'},
    {id: '3', name: 'Sushi'},
  ]);
  const [newFavorite, setNewFavorite] = useState('');

  const addFavorite = () => {
    if (newFavorite.trim() !== '') {
      const newId = (favorites.length + 1).toString();
      const newFavoriteItem = {id: newId, name: newFavorite};
      setFavorites([...favorites, newFavoriteItem]);
      setNewFavorite('');
    }
  };

  const removeFavorite = (id: any) => {
    const updatedFavorites = favorites.filter(item => item.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Favorite Foods</Text>
        <TextInput
          style={styles.input}
          placeholder="Add a new favorite"
          value={newFavorite}
          onChangeText={setNewFavorite}
        />
        <TouchableOpacity style={styles.addButton} onPress={addFavorite}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
        <FlatList
          data={favorites}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => removeFavorite(item.id)}>
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
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
});

export default FavoritesScreen;
