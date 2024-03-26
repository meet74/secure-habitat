import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity,Dimensions,ScrollView } from "react-native";
import React from "react";
import { Colors } from "../../constant/Colors";
import { screenNames } from "../../navigator/screennames";
import {  useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../../store/action/user";
import Card from "../../components/Card";


const { width, height } = Dimensions.get("screen");

const ProfileScreen = (props) => {
  const userData = useSelector(state => state.user)
  console.log(userData);
  const dispatch = useDispatch()
  const handleSignout = () =>{
    dispatch(signOutUser())
    props.navigation.replace(screenNames.authflow)
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.headerText}>Your Profile</Text>
      <View style={styles.profile_container}>
        <Image
          source={require("../../../assets/images/profile_pic.jpg")}
          style={{
            borderRadius: 100,
            height: 130,
            width: 130,
            resizeMode: "cover",
          }}
        />
        <Text style={styles.profile_name}> {userData.user.id ? userData.user.name : "Shreehari"}</Text>
      </View>
      <Text style={styles.descriptionText}>Description</Text>
      <Text style = {styles.description}>
        Hey there! I'm an enthusiastic tech aficionado with a passion for
        exploring the latest innovations in the digital world. As a curious
        learner, I'm always diving into new technologies and concepts, eager to
        expand my knowledge and skill set.
      </Text>
      <Text style = {styles.descriptionText}>My Bookings</Text>
      {
       userData.user.mybooks.length ?
       userData.user.mybooks.map((item,index) => {
        return <Card item={item} props={props} key={index}/>
      }):
      <Text style = {styles.nobookingsText}>No Bookings yet</Text>
      }
      <TouchableOpacity
          onPress={handleSignout}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </View>
        </TouchableOpacity>

        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  profile_name: {
    color: "white",
    fontSize: 24,
    margin: 20,
    fontWeight:"bold"
  },
  profile_container: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    margin: 30,
  },
  descriptionText: {
    color: "white",
    margin: 15,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    color: Colors.borderColor,
    margin: 10,
    marginHorizontal: 20,
    lineHeight: 25,
  },
  headerText: {
    fontSize: 26,
    color: Colors.buttonColor,
    margin: 15,
    fontWeight: "500",
  },
  buttonContainer: {
    width: width * 0.9,
    height: 50,
    alignSelf: "center",
    backgroundColor: Colors.buttonColor,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    letterSpacing: 1,
  },
  nobookingsText:{
    color: Colors.buttonColor,
    fontSize: 16,
    margin:30,
    fontStyle:"italic",
    alignSelf:"center"
  }
});
export default ProfileScreen;
