import React, {useState, useEffect, useRef} from 'react';
import {TextInput, StyleSheet, View, Animated, Text} from 'react-native';

const CustomTextInput = (props: any) => {
  const {
    value,
    multiline,
    placeholder,
    onChangeText,
    keyboardType,
    numberOfLines,
    maxLength,
    style,
    editable,
    inputMode,
    error,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [animatedValue, isFocused, value]);

  const labelStyle = {
    top: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [22, 14],
    }),
    fontSize: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.placeholderText, labelStyle]}>
        {placeholder}
      </Animated.Text>
      <TextInput
        value={value}
        multiline={multiline}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        style={[
          styles.defaultStyle,
          multiline ? styles.multilineInput : styles.textInputValue,
          !error && value === '' && style,
          error && value === '' && styles.errorStyle,
          value !== '' && styles.marginBottom,
          {
            marginTop: placeholder === 'Address' && 10,
          },
        ]}
        editable={editable}
        inputMode={inputMode}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={''}
        {...rest}
      />
      {error && value === '' ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginVertical: 0,
  },

  defaultStyle: {
    height: 70,
    borderWidth: 1,
    borderColor: '#D9DBDD',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 22,
    paddingBottom: 10,
    fontSize: 16,
    color: '#02111A',
    fontWeight: '500',
  },

  textInputValue: {
    fontSize: 16,
    color: '#02111A',
    fontWeight: '500',
  },

  multilineInput: {
    height: 'auto',
    minHeight: 70,
    textAlignVertical: 'top',
  },

  placeholderText: {
    position: 'absolute',
    left: 12,
    color: '#4E585E',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 4,
  },

  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
    marginBottom: 16,
    marginLeft: 5,
  },

  errorStyle: {
    borderColor: 'red',
  },

  marginBottom: {
    marginBottom: 16,
  },
});

export default CustomTextInput;
