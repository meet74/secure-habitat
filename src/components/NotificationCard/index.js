import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constant/Colors';

const NotificationCard = ({ title, message, time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.buttonColor,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  time: {
    fontSize: 12,
    color: 'white',
  },
});

export default NotificationCard;
