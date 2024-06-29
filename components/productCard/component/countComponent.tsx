import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CounterComponent = (props: any) => {
  const {value, handleDecrement, handleIncrement} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, value === 0 && styles.disabledButton]}
        onPress={handleDecrement}
        activeOpacity={1}
        disabled={value === 0}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.valueText}>{value as any}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleIncrement}
        activeOpacity={1}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  button: {
    width: 20,
    height: 20,
    alignItems: 'center',
    lineHeight: 20,
    backgroundColor: '#c8361e',
    borderRadius: 50,
  },

  disabledButton: {
    backgroundColor: '#A9A9A9',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -5,
  },

  valueText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 18,
  },
});

export default CounterComponent;
