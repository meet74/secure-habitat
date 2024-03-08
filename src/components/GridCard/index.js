import { View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import React from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../constant/Colors";

import { screenNames } from "../../navigator/screennames";

const GridCard = ({item,props,cardstyles}) => {
  
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
      width: cardstyles ? cardstyles.width : 250,
      height: cardstyles ? cardstyles.height : 150,
      ...cardstyles
    },
    recommendationPriceContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 10,
      alignItems: "center",
    },
    recommendationPriceText: {
      fontWeight: "bold",
      fontSize: cardstyles ? cardstyles.cardPriceSize:20,
      color: Colors.buttonColor,
    },
    recommendationaddresstext: {
      marginVertical: 10,
      color: "white",
      fontWeight: "bold",
      fontSize: cardstyles ? cardstyles.cardAddressSize:20,
      width:"90%"
    },
    locationContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    cityText: {
      color: "grey",
      marginHorizontal:5,
      fontSize: cardstyles ? cardstyles.cardCityText:20,
      
    },
    locationText: {
      color: "white",
      fontSize: cardstyles ? cardstyles.cardAddressSize:20,
      
    },
  });

  
 
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate(screenNames.propertiesDetail,{item})}>
      <View style={styles.recommendationContainer}>
      <Image source={{uri:item.image}} style={styles.recommendationImage} />
      <Text style={styles.recommendationaddresstext}>{item.address}</Text>
      <View style={styles.locationContainer}>
        <Entypo name="location-pin" size={props.cardstyles ? props.cardstyles.iconSize:24} color={"white"} />
        <Text style={styles.cityText}>{item.city}</Text>
      </View>

      <View style={styles.recommendationPriceContainer}>
        <Text style={styles.recommendationPriceText}>${item.price}</Text>
        <MaterialIcons name="favorite-border" size={ props.cardstyles ? props.cardstyles.iconSize:24} color="gray" />
      </View>
    </View>
    </TouchableOpacity>
  );
};


export default GridCard;
