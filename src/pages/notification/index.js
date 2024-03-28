import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";
import React from "react";
import { Colors } from "../../constant/Colors";
import { dummyData } from "../../constant/DummyData";
import Card from "../../components/Card";
import {
  Swipeable,
  RectButton,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { SafeAreaProvider as SafeAreaView} from 'react-native-safe-area-context';
import NotificationCard from "../../components/NotificationCard";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../../config/firebase";
import { add_notifications, remove_notifications } from "../../store/action/user";

const NotificationScreen = () => {

  const userData = useSelector(state=>state.user)
  console.log(userData.user.mynoti);
  const dispatch = useDispatch();
  const renderRightActions = (progress, dragX,nid) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-5, 0, 0, 1],
    });

    console.log(progress);
    return (
      <RectButton onPress={() => handleCancel(nid)} style={{ ...styles.rightActionContainer }}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          Remove
        </Animated.Text>
      </RectButton>
    );
  };

  const handleCancel = async(notiId) => {
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
  
      const oldNotificaitons = [...tempUser.notifications]
     
      oldNotificaitons.filter(old=>old.nid !== notiId)
    
      const newUserData = {
       ...tempUser,
       notifications:oldNotificaitons
      }
     
      dispatch(remove_notifications(notiId))
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


  }



  return (
    <SafeAreaView style={styles.container}>
       <View style ={{marginTop:40}}>
      <GestureHandlerRootView>
        <FlatList
          data={userData.user.mynoti}
          ListHeaderComponent={() => {
            return <Text style={styles.favoriteText}>Notifications</Text>;
          }}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <Swipeable renderRightActions={(progress,dragX)=>renderRightActions(progress,dragX,item.nid)}>
               <NotificationCard time={"2 days ago"} title={item.message.message} message={""}/>
              </Swipeable>
            );
          }}
        />
      </GestureHandlerRootView>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  favoriteText: {
    fontSize: 26,
    color: Colors.buttonColor,
    margin: 15,
    fontWeight: "500",
  },
  actionText: {
    color: "red",
    fontSize: 20,
   
  },
  rightActionContainer: {
    alignItems: "center",
    justifyContent: "center",

    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
