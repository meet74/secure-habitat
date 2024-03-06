import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../constant/Colors";

const GridCard = (props) => {
  
  const styles = StyleSheet.create({
  
    recommendationContainer: {
      borderWidth: 0.5,
      borderColor: "gray",
      borderRadius: 10,
      margin: 10,
      padding: 15,
  
      justifyContent: "center",
    },
    recommendationImage: {
      width: props.cardstyles ? props.cardstyles.width : 250,
      height: props.cardstyles ? props.cardstyles.height : 150,
    },
    recommendationPriceContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 10,
      alignItems: "center",
    },
    recommendationPriceText: {
      fontWeight: "bold",
      fontSize: props.cardstyles ? props.cardstyles.cardPriceSize:20,
      color: Colors.buttonColor,
    },
    recommendationaddresstext: {
      marginVertical: 10,
      color: "white",
      fontWeight: "bold",
      fontSize: props.cardstyles ? props.cardstyles.cardAddressSize:20,
    },
    locationContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    cityText: {
      color: "grey",
      marginHorizontal:5,
      fontSize: props.cardstyles ? props.cardstyles.cardCityText:20,
      
    },
    locationText: {
      color: "white",
      fontSize: props.cardstyles ? props.cardstyles.cardAddressSize:20,
      
    },
  });

  

  return (
    <View style={styles.recommendationContainer}>
      <Image source={props.item.image} style={styles.recommendationImage} />
      <Text style={styles.recommendationaddresstext}>{props.item.address}</Text>
      <View style={styles.locationContainer}>
        <Entypo name="location-pin" size={props.cardstyles ? props.cardstyles.iconSize:24} color={"white"} />
        <Text style={styles.cityText}>{props.item.city}</Text>
      </View>

      <View style={styles.recommendationPriceContainer}>
        <Text style={styles.recommendationPriceText}>${props.item.price}</Text>
        <MaterialIcons name="favorite-border" size={ props.cardstyles ? props.cardstyles.iconSize:24} color="gray" />
      </View>
    </View>
  );
};


export default GridCard;
