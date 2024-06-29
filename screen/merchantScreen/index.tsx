/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {merchantDetailsStyle} from './style';
import TopBar from '../../components/topBar';
import {useNavigation} from '@react-navigation/native';
import ProductCard from '../../components/productCard';

const DATA = [
  {
    id: 1,
    icon: require('../../assets/star.png'),
    title: '4.8',
    description: 'Check reviews',
  },
  {
    id: 2,
    icon: require('../../assets/locationRed.png'),
    title: '2.69 km',
    description: 'Distance',
  },
  {
    id: 3,
    icon: require('../../assets/person.png'),
    title: '1k + ratings',
    description: 'Good taste',
  },
];

const chipData = [
  {
    id: 0,
    title: 'All',
  },
  {
    id: 1,
    icon: require('../../assets/chicken.png'),
    title: 'Combo',
  },
  {
    id: 2,
    icon: require('../../assets/hand.png'),
    title: 'Special',
  },
  {
    id: 3,
    icon: require('../../assets/coffee.png'),
    title: 'Drinks',
  },
  {
    id: 4,
    icon: require('../../assets/chicken.png'),
    title: 'Food',
  },
  {
    id: 5,
    icon: require('../../assets/hand.png'),
    title: 'Side Dish',
  },
];

const comboData = [
  {
    id: 1,
    image: require('../../assets/food1.jpg'),
    title: 'Super Family Package',
    description: '2 Chicken Wings, 2 Rice Bowl, 1 lt Coke',
    amount: '$12.00',
  },
  {
    id: 2,
    image: require('../../assets/food2.jpg'),
    title: 'Chicken Super',
    description: '1 Chicken Large, 2 Pocket Tomato Jazz',
    amount: '$18.00',
  },
  {
    id: 3,
    image: require('../../assets/food3.jpg'),
    title: 'Beef Steak Large',
    description: '1 Beef Steak',
    amount: '$20.00',
  },
  {
    id: 4,
    image: require('../../assets/food4.jpg'),
    title: 'Special Orange Juice',
    description: '1 Orange Juice',
    amount: '$3.00',
  },
  {
    id: 5,
    image: require('../../assets/food5.jpg'),
    title: 'Chicken Soup',
    description: '1 Chicken Soup',
    amount: '$49.00',
  },
  {
    id: 6,
    image: require('../../assets/food6.jpg'),
    title: 'Super Family Bucket Biriyani',
    description: '2 Buget Chicken Biriyani, 2 White Rice Bowl, 1 lt Coke',
    amount: '$32.00',
  },
  {
    id: 7,
    image: require('../../assets/food1.jpg'),
    title: 'Super Family Package',
    description: '2 Chicken Wings, 2 Rice Bowl, 1 lt Coke',
    amount: '$12.00',
  },
  {
    id: 8,
    image: require('../../assets/food2.jpg'),
    title: 'Chicken Super',
    description: '1 Chicken Large, 2 Pocket Tomato Jazz',
    amount: '$18.00',
  },
  {
    id: 9,
    image: require('../../assets/food3.jpg'),
    title: 'Beef Steak Large',
    description: '1 Beef Steak',
    amount: '$20.00',
  },
];

const MerchantScreen = (props: any) => {
  const {} = props;

  const navigation = useNavigation();

  const [values, setValues] = useState<any>({});
  const [selectedProductCount, setSelectedProductCount] = useState<any>(0);
  const [selectedProductAmount, setSelectedProductAmount] = useState<any>(0);
  const [selectedChip, setSelectedChip] = useState<any>({
    id: chipData[1]?.id,
    title: chipData[1]?.title,
    icon: chipData[1]?.icon,
  });

  const handleChipPress = (id: any, title: string, icon: any) => {
    setSelectedChip({id, title, icon});
  };

  const handleIncrement = (id: any, amount: string) => {
    const numericAmount = parseFloat(amount.replace('$', ''));
    setValues((prevValues: any) => ({
      ...prevValues,
      [id]: (prevValues[id] || 0) + 1,
    }));
    setSelectedProductCount((prevCount: any) => prevCount + 1);
    setSelectedProductAmount((prevAmount: any) => prevAmount + numericAmount);
  };

  const handleDecrement = (id: any, amount: string) => {
    const numericAmount = parseFloat(amount.replace('$', ''));
    setValues((prevValues: any) => {
      const newValue = Math.max((prevValues[id] || 0) - 1, 0);
      return {
        ...prevValues,
        [id]: newValue,
      };
    });
    setSelectedProductCount((prevCount: any) => Math.max(prevCount - 1, 0));
    setSelectedProductAmount((prevAmount: any) =>
      Math.max(prevAmount - numericAmount, 0),
    );
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const Item = (propData: any) => {
    const data = propData?.data;

    return (
      <View
        style={{
          borderRightWidth: propData?.count !== 2 ? 1 : 0,
          borderRightColor: '#e8e8e8',
          paddingRight: 13,
        }}>
        <View style={merchantDetailsStyle.storeIconSection}>
          <Image
            source={data?.icon}
            style={merchantDetailsStyle.storeIcon}
            resizeMode="contain"
          />
          <Text style={merchantDetailsStyle.title}>{data?.title}</Text>
        </View>
        <Text style={merchantDetailsStyle.subText}>{data?.description}</Text>
      </View>
    );
  };

  const Chip = ({text, icon, selected, onPress}: any) => (
    <TouchableOpacity
      style={[
        merchantDetailsStyle.chip,
        {backgroundColor: selected ? '#ca4d34' : '#FFF'},
      ]}
      onPress={onPress}>
      <Text
        style={[
          merchantDetailsStyle.chipText,
          {color: selected ? '#FFF' : 'gray'},
        ]}>
        {text}
      </Text>
      {icon && (
        <Image
          source={icon}
          style={merchantDetailsStyle.chipIcon}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={merchantDetailsStyle.container}>
      <View style={merchantDetailsStyle.firstSection}>
        <TopBar
          title="Merchant Details"
          handleBackPress={handleBackPress}
          rootStyle={merchantDetailsStyle.topBarStyle}
        />
        <View style={merchantDetailsStyle.productCardSection}>
          <ProductCard
            source={require('.../../../assets/food1.jpg')}
            imageStyle={merchantDetailsStyle.imageStyle}
            title="Chicken Lalapan Gresik"
            descriptionIcon={require('../../assets/location.png')}
            description="4831 Kildeer Boyunton Beach, Florida 33456"
            showCounter={false}
            descriptionStyle={{width: 280}}
          />
        </View>
        <View style={merchantDetailsStyle.storeDetails}>
          <FlatList
            data={DATA}
            renderItem={({item, index}: any) => (
              <Item data={item} count={index} />
            )}
            keyExtractor={(item: any) => item?.id}
            horizontal={true}
            contentContainerStyle={merchantDetailsStyle.flatListStyle}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={merchantDetailsStyle.chipDetails}>
          <FlatList
            data={chipData}
            horizontal
            keyExtractor={(item: any) => item?.id}
            renderItem={({item}: any) => (
              <Chip
                text={item?.title}
                icon={item?.icon}
                selected={item?.id === selectedChip.id}
                onPress={() =>
                  handleChipPress(item?.id, item?.title, item?.icon)
                }
              />
            )}
            contentContainerStyle={merchantDetailsStyle.chipContainer}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={merchantDetailsStyle.secondSection}>
        <View style={merchantDetailsStyle.headerTextSection}>
          <Text style={merchantDetailsStyle.headerText}>
            {selectedChip?.title}
          </Text>
          {selectedChip?.icon && (
            <Image
              source={selectedChip?.icon}
              style={merchantDetailsStyle.headerIcon}
              resizeMode="contain"
            />
          )}
        </View>
        <View style={merchantDetailsStyle.comboContainerSx}>
          <FlatList
            data={comboData}
            keyExtractor={(item: any) => item?.id}
            renderItem={({item}: any) => (
              <ProductCard
                source={item?.image}
                imageStyle={merchantDetailsStyle.comboImageStyle}
                title={item?.title}
                titleStyle={merchantDetailsStyle.comboTextSx}
                description={item?.description}
                showCounter={true}
                descriptionStyle={{width: 150}}
                amount={item?.amount}
                // amount={`$${item?.amount.toFixed(2)}`}
                countState={values[item?.id] || 0}
                handleIncrement={() => handleIncrement(item?.id, item?.amount)}
                handleDecrement={() => handleDecrement(item?.id, item?.amount)}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={merchantDetailsStyle.floatingButton}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
            <Text style={merchantDetailsStyle.totalAmountStyle}>
              {`$ ${selectedProductAmount}.00`}
            </Text>
            <Text style={merchantDetailsStyle.totalCountStyle}>
              {`${selectedProductCount} Food Selected`}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => Alert.alert('Cart added successfully!')}
            activeOpacity={1}>
            <Image
              source={require('../../assets/down3.png')}
              style={merchantDetailsStyle.rightArrowStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MerchantScreen;
