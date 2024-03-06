import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../../constant/Colors";


const Card = (props) => {
  return (
    <View style={styles.mainCardContainer}>
      <Image source={props.item.image} style={styles.mainCardImage} />
      <View style={{ marginHorizontal: 10 }}>
        <Text style={styles.mainCardaddresstext}>{props.item.address}</Text>
        <View style={styles.locationContainer}>
          <Entypo name="location-pin" size={24} color={"white"} />
          <Text style={styles.cityText}>{props.item.city}</Text>
        </View>
        <View style={styles.mainCardPriceContainer}>
          <Text style={styles.mainCardPriceText}>${props.item.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  mainCardContainer: {
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  mainCardPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    alignItems: "center",
  },
  mainCardPriceText: {
    fontWeight: "bold",
    fontSize: 18,
    color:Colors.buttonColor,
  },
  mainCardImage: {
    width: 150,
    height: 100,
  },

  mainCardaddresstext: {
    marginVertical: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cityText: {
    color: "grey",
    marginHorizontal:5
  },
  locationText: {
    color: "white",
    fontSize: 20,
    
  },
});
