import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constant/Colors';

const Receipt = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receipt</Text>
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>Property Posting Fee</Text>
        <Text style={styles.itemPrice}>CAD $25.00</Text>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmount}>CAD $25.00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    padding: 20,
    backgroundColor: Colors.buttonColor,
    margin:25,
    borderRadius:20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"white"
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    color:"white"
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color:"white"
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    borderTopWidth: 1,
    borderColor:"white",
    paddingTop: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"white"
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"white"
  },
});

export default Receipt;
