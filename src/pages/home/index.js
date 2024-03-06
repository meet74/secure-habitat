import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constant/Colors";
import {
  Entypo,
  AntDesign,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { dummyData } from "../../constant/DummyData";
import GridCard from "../../components/GridCard";
import Card from "../../components/Card";

const { width, height } = Dimensions.get("screen");

const HomeScreen = () => {
  const [city, setcity] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.locationText}>Location</Text>
          <View style={styles.locationContainer}>
            <Entypo name="location-pin" size={30} color={Colors.buttonColor} />
            <Text style={styles.cityText}>Kitchener, N2G1E9</Text>
          </View>
        </View>

        <View style={styles.inputDecoration}>
          <AntDesign
            name="search1"
            size={24}
            color={"rgba(37, 176, 243,0.6)"}
          />
          <TextInput
            placeholderTextColor={"rgba(37, 176, 243,0.6)"}
            placeholder="Search"
            style={styles.inputText}
            onChangeText={setcity}
          />
        </View>

        <View style={styles.headerContainer}>
          <View style={styles.headerCard}>
            <FontAwesome name="home" size={30} color="white" />
            <Text style={styles.headerCardText}>House</Text>
          </View>
          <View style={styles.headerCard}>
            <MaterialCommunityIcons name="home-city" size={30} color="white" />

            <Text style={styles.headerCardText}>Bunglow</Text>
          </View>
          <View style={styles.headerCard}>
            <MaterialIcons name="apartment" size={30} color="white" />
            <Text style={styles.headerCardText}>Apartment</Text>
          </View>
        </View>

        <View>
          <View style={styles.recommendationTextContainer}>
            <Text style={styles.recommendationText}>Recommendations</Text>
            <Text style={styles.seeallText}>See all</Text>
          </View>

          <FlatList
            data={dummyData}
            horizontal
            renderItem={({ item }) => {
              return <GridCard item={item} />;
            }}
          />

          <View style={styles.recommendationTextContainer}>
            <Text style={styles.recommendationText}>Nearby Location</Text>
            <Text style={styles.seeallText}>See all</Text>
          </View>

          <FlatList
            data={dummyData}
            renderItem={({ item }) => {
              return <Card item={item} />;
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  header: {
    margin: 15,
    justifyContent: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cityText: {
    color: "grey",
  },
  locationText: {
    color: "white",
    fontSize: 20,
    margin: 5,
  },
  inputText: {
    padding: 10,
    flex: 1,
    color: Colors.buttonColor,
  },
  inputDecoration: {
    width: width * 0.9,
    alignSelf: "center",
    margin: 10,
    backgroundColor: "rgba(37, 176, 243,0.1)",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
  },
  headerCard: {
    backgroundColor: "rgba(144, 155, 160,0.05)",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flexDirection: "row",
    margin: 20,
    justifyContent: "space-around",
  },
  headerCardText: {
    color: "white",
  },
  seeallText: {
    color: Colors.buttonColor,
  },
  recommendationText: {
    color: "white",
    fontSize: 18,
  },
  recommendationTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
});

export default HomeScreen;
