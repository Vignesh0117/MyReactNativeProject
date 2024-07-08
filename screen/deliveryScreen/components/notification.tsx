// Notifications.js
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import BackgroundScreen from './backgroundScreen';

const initialNotifications = [
  {
    id: '1',
    message: 'Your order has been shipped!',
    timestamp: '2023-07-06 10:30',
  },
  {
    id: '2',
    message: 'New restaurant added: Pizza Palace',
    timestamp: '2023-07-06 09:00',
  },
  {
    id: '3',
    message: '20% off on all sushi orders today!',
    timestamp: '2023-07-05 14:20',
  },
];

const NotificationItem = ({notification, onDelete}: any) => {
  const translateX = new Animated.Value(0);

  const handleDelete = () => {
    Animated.timing(translateX, {
      toValue: -1000,
      duration: 300,
      useNativeDriver: true,
    }).start(() => onDelete(notification.id));
  };

  return (
    <Animated.View style={{transform: [{translateX}]}}>
      <View style={styles.notificationItem}>
        <View style={styles.notificationContent}>
          <Text style={styles.notificationText}>{notification.message}</Text>
          <Text style={styles.notificationTimestamp}>
            {notification.timestamp}
          </Text>
        </View>
        <TouchableOpacity onPress={handleDelete}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleDelete = (id: any) => {
    setNotifications(prevNotifications =>
      prevNotifications.filter(notification => notification.id !== id),
    );
  };

  return (
    <BackgroundScreen>
      <Text style={styles.title}>Notifications</Text>

      <View style={styles.container}>
        <FlatList
          data={notifications}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <NotificationItem notification={item} onDelete={handleDelete} />
          )}
        />
      </View>
    </BackgroundScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#02111a',
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  notificationItem: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationContent: {
    flex: 1,
  },
  notificationText: {
    fontSize: 16,
    color: '#333',
  },
  notificationTimestamp: {
    fontSize: 12,
    color: '#999',
  },
  deleteButtonText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default Notifications;
