import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const DrawerBody = (props: any) => {
  const {menuData, navigateTo} = props;

  const handleMenuClick = (item: any) => {
    navigateTo(item);
  };

  return (
    <View style={styles.menuRoot}>
      <FlatList
        data={menuData}
        keyExtractor={(item: any) => item?.id}
        renderItem={({item}: any) => (
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.menuBox}
            onPress={() => handleMenuClick(item)}>
            <View style={styles.iconRoot}>
              <Image source={item?.image} style={styles.menuIconsStyle} />
            </View>
            <Text style={styles.menuText}>{item?.name}</Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuRoot: {
    flex: 1,
  },

  menuBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 23,
  },

  menuIconsStyle: {
    width: 20,
    height: 20,
  },

  menuText: {
    fontSize: 20,
    color: '#02111a',
    fontWeight: '400',
  },

  iconRoot: {
    backgroundColor: '#ff6f37',
    borderRadius: 55,
    padding: 10,
    resizeMode: 'contain',
  },

  menuContainer: {},
});

export default DrawerBody;
