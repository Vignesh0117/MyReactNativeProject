import React from 'react';
import {deliveryScreenStyles} from '../style';
import {Text, View} from 'react-native';
import SearchBarWithFilter from '../../../components/searchBar';
import ChipBox from '../../../components/chipComponent';
import {chipData, foodData} from '../utils';
import FoodList from '../../../components/foodCard';

const HomeBodyComponent = (props: any) => {
  const {
    title,
    foodHeaderText,
    foodHeaderEnd,
    chipState,
    handleChipPress,
    navigation,
  } = props;
  return (
    <View style={deliveryScreenStyles.bodyRootSx}>
      <Text style={deliveryScreenStyles.bodyTitle}>{title}</Text>
      <SearchBarWithFilter />
      <ChipBox
        data={chipData}
        chipState={chipState}
        handleChipPress={handleChipPress}
      />
      <View style={deliveryScreenStyles.headerSection}>
        <Text style={deliveryScreenStyles.bodyHeaderTitle}>
          {foodHeaderText}
        </Text>
        <Text style={deliveryScreenStyles.bodyHeaderEnd}>{foodHeaderEnd}</Text>
      </View>
      <FoodList foodData={foodData} navigation={navigation} />
    </View>
  );
};

export default HomeBodyComponent;
