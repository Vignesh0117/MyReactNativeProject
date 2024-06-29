import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {buttonStyle} from './style';

const CustomButton = (props: any) => {
  const {title, activeOpacity, textStyle, buttonStyleSx} = props;
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[buttonStyle.button, buttonStyleSx]}
      {...props}>
      <Text style={[buttonStyle.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
