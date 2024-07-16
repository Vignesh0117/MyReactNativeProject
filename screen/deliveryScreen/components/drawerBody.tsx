import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {menuData} from '../utils';

const DrawerBody = ({navigation}: any) => {
  // const {menuData, navigateTo, closeDrawer} = props;

  const handleMenuClick = (item: any) => {
    // navigateTo(item);
    navigation.navigate(item);
    navigation.closeDrawer();
  };

  const handleCloseDrawer = () => {
    navigation.closeDrawer();
  };

  return (
    <View style={styles.menuRoot}>
      <View style={styles.containerSx}>
        <TouchableOpacity
          onPress={handleCloseDrawer}
          style={styles.closeStyleSx}>
          <Image
            source={require('../../../assets/closeIcon.png')}
            style={styles.closeStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.profileStyle}>
          <Image
            source={require('../../../assets/dummyAvatar.png')}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.nameStyle}>Shahinur Rahman</Text>
            <Text style={styles.roleStyle}>Admin</Text>
          </View>
        </View>
      </View>
      <View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  menuRoot: {
    flex: 1,
    zIndex: 999,
  },

  containerSx: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  profileImage: {
    width: 60,
    height: 60,
    backgroundColor: '#f5e3df',
    padding: 10,
    resizeMode: 'contain',
    borderRadius: 30,
  },

  closeStyleSx: {
    alignItems: 'flex-end',
  },

  closeStyle: {
    width: 20,
    height: 20,
  },

  profileStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginVertical: 30,
    borderBottomWidth: 1,
    borderColor: '#dbdae1',
    paddingBottom: 30,
  },

  nameStyle: {
    fontSize: 18,
    color: '#02111a',
    fontWeight: '600',
  },

  roleStyle: {
    fontSize: 16,
    color: 'gray',
  },

  bodyStyle: {
    marginTop: 10,
    flex: 1,
  },

  menuBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 23,
    marginHorizontal: 16,
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
