import React from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBarWithFilter = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={28} color="#aaa" style={styles.searchIcon} />
      <TextInput
        style={[styles.input, styles.textInputValue]}
        placeholder="Search your food"
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.filterButton}>
        <Icon name="options" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginVertical: 20,
  },

  searchIcon: {
    marginLeft: 10,
  },

  input: {
    flex: 1,
    height: 50,
    marginLeft: 10,
  },

  textInputValue: {
    fontSize: 18,
  },

  filterButton: {
    backgroundColor: '#FF6E40',
    padding: 10,
    borderRadius: 20,
  },
});

export default SearchBarWithFilter;
