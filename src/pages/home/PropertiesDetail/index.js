import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "../../../constant/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { screenNames } from "../../../navigator/screennames";
import { useDispatch, useSelector } from "react-redux";
import { cancel_book, set_book } from "../../../store/action/user";
import { addDoc, arrayUnion, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../../../config/firebase";

const { width, height } = Dimensions.get("screen");

const PropertiesDetailScreen = (props) => {
  const { item } = props.route.params;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.primaryColor,
    },
    propertiesImage: {
      height: height * 0.4,
      width: width,
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
    },
    cardaddresstext: {
      marginTop: 25,
      width: "100%",
      color: "white",
      fontWeight: "bold",
      fontSize: 28,
      margin: 20,
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
    amenityContainer: {
      flexDirection: "row",
      margin: 10,
      marginLeft: 20,
      alignItems: "center",
    },
    amenityText: {
      color: "white",
      margin: 10,
      fontSize: 16,
    },
    btnContainer: {
      width: "90%",
      position: "absolute",
      bottom: 0,
      backgroundColor: Colors.buttonColor,
      alignSelf: "center",
      margin: 20,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    btnText: {
      color: "white",
      padding: 20,
      fontSize: 18,
      letterSpacing: 1,
    },
  });

  const dispatch = useDispatch();
  const userData = useSelector(state=>state.user)

  const isPropertyBooked = () =>  userData.user.mybooks.some(data=>data.id === item.id)

  const handleCancel = async() => {
    const userArrRef = doc(firestore, "users", "usersArr");
    const userArrSnap = await getDoc(userArrRef);

    if (userArrSnap.exists()) {
      // Update the userArr document's bookings array with the new booking
      const userDataArr = userArrSnap.data().users
      //console.log(userData.user.id);
      const particularUser = userDataArr.find(u=>u.uid === userData.user.id)
      //console.log("d"+particularUser);
      const tempUser = { ...particularUser}
      console.log("user"+tempUser);
      const oldBookings = [...tempUser.bookings]
      const newBookings = oldBookings.filter(data=>data.id !== item.id)
      
      console.log("book"+newBookings.length );
      const newUserData = {
       ...tempUser,
       bookings:newBookings
      }
      dispatch(cancel_book(newBookings))
      
      const filteredArr = userDataArr.filter(data=>data.uid !== userData.user.id);
      console.log("filter"+filteredArr);
      filteredArr.push(newUserData)
      //console.log("filterArr"+filteredArr[0].bookings[0);
      await updateDoc(userArrRef, {
          users: filteredArr
      });
      console.log("Booking cancelled successfully.");
  } else {
      console.log("userArr document does not exist.");
  }


   
    props.navigation.navigate(screenNames.confirmBookingPage);
  }

  const handleBooking = async() => {
    
    const userArrRef = doc(firestore, "users", "usersArr");
    const userArrSnap = await getDoc(userArrRef);

    if (userArrSnap.exists()) {
      // Update the userArr document's bookings array with the new booking
      const userDataArr = userArrSnap.data().users
      //console.log(userData.user.id);
      const particularUser = userDataArr.find(u=>u.uid === userData.user.id)
      //console.log("d"+particularUser);
      const tempUser = { ...particularUser}
      console.log(tempUser);
      const oldBookings = [...tempUser.bookings]
      oldBookings.push(item)
     
      const newUserData = {
       ...tempUser,
       bookings:oldBookings
      }
      //console.log("new"+newUserData.bookings[0].address);
      const filteredArr = userDataArr.filter(data=>data.uid !== userData.user.id);
      console.log("filter"+filteredArr);
      filteredArr.push(newUserData)
      //console.log("filterArr"+filteredArr[0].bookings[0].address);
      
      await updateDoc(userArrRef, {
          users: filteredArr
      });
      console.log("Booking added successfully.");
  } else {
      console.log("userArr document does not exist.");
  }


    dispatch(set_book(item))
    props.navigation.navigate(screenNames.confirmBookingPage);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.propertiesImage}
        />
        <View>
          <Text style={styles.cardaddresstext}>{item.title}</Text>
          <Text style={styles.descriptionText}>Description</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>

        <View>
          <Text style={styles.descriptionText}>Amenities</Text>
          {item.amenities.map((item) => {
            return (
              <View style={styles.amenityContainer}>
                <MaterialCommunityIcons
                  name="star-four-points-outline"
                  size={20}
                  color="white"
                />
                <Text style={styles.amenityText}>{item}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.btnContainer} onPress={isPropertyBooked() ? handleCancel: handleBooking}>
        <Text style={styles.btnText}>{isPropertyBooked() ? "Cancel appointment":"Book for appointment" }</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PropertiesDetailScreen;
