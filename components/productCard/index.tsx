/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import {productCardStyle} from './style';
import CounterComponent from './component/countComponent';

const ProductCard = (props: any) => {
  const {
    source,
    title,
    description,
    amount,
    rootStyle,
    descriptionIcon,
    imageStyle,
    titleStyle,
    amountStyle,
    descriptionStyle,
    countState,
    handleIncrement,
    handleDecrement,
    showCounter,
  } = props;

  return (
    <View style={[productCardStyle.container, rootStyle]}>
      <Image source={source} style={imageStyle} />
      <View style={productCardStyle.detailsStyle}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[productCardStyle.titleStyleSx, titleStyle]}>
          {title}
        </Text>
        <View style={productCardStyle.descriptionBoxStyle}>
          {descriptionIcon && (
            <Image
              source={descriptionIcon}
              style={productCardStyle.descriptionIconStyle}
            />
          )}
          <Text
            style={[productCardStyle.descriptionStyleSx, descriptionStyle]}
            numberOfLines={1}
            ellipsizeMode="tail">
            {description}
          </Text>
        </View>
        {amount && (
          <>
            <Text style={[productCardStyle.amountStyleSx, amountStyle]}>
              {amount}
            </Text>
          </>
        )}
      </View>
      {showCounter && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CounterComponent
            value={countState}
            showCounter={showCounter}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
        </View>
      )}
    </View>
  );
};

export default ProductCard;
