import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../../constant/Colors";
import { dummyData } from "../../constant/DummyData";
import { screenNames } from "../../navigator/screennames";


const Card = ({item = dummyData[0], props,screen = screenNames.propertiesDetail}) => {
  return (
   <TouchableOpacity onPress={() => props.navigation.navigate(screen,{item})}>
     <View style={styles.mainCardContainer}>
      <Image source={{uri:item.image}} style={styles.mainCardImage} />
      <View style={{ marginHorizontal: 10 }}>
        <Text style={styles.mainCardaddresstext}>{item.address}</Text>
        <View style={styles.locationContainer}>
          <Entypo name="location-pin" size={24} color={"white"} />
          <Text style={styles.cityText}>{item.city}</Text>
        </View>
        <View style={styles.mainCardPriceContainer}>
          <Text style={styles.mainCardPriceText}>${item.price}</Text>
        </View>
      </View>
    </View>
   </TouchableOpacity>
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
    width:"100%",
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
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
