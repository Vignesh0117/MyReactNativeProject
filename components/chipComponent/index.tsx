import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';

const ChipBox = (props: any) => {
  const {data, chipState, handleChipPress} = props;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item: any) => item?.id}
        renderItem={({item}: any) => (
          <TouchableOpacity
            style={[
              styles.chip,
              item?.id === chipState
                ? styles.selectedChip
                : styles.unselectedChip,
            ]}
            onPress={() => handleChipPress(item)}>
            <View style={styles.chipBox}>
              <Image source={item?.image} style={styles.chipImage} />
            </View>
            <Text
              style={
                item.id === chipState
                  ? styles.selectedText
                  : styles.unselectedText
              }>
              {item?.name}
            </Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  chip: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    paddingVertical: 6,
    paddingLeft: 6,
    paddingRight: 22,
    borderRadius: 30,
    marginRight: 12,
  },
  selectedChip: {
    backgroundColor: '#FF6F61',
  },
  unselectedChip: {
    backgroundColor: '#FFF',
  },
  chipBox: {
    backgroundColor: '#f5e3df',
    padding: 4,
    borderRadius: 24,
  },
  chipImage: {
    width: 35,
    height: 35,
  },
  selectedText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  unselectedText: {
    color: '#000000',
    fontSize: 16,
  },
});

export default ChipBox;
