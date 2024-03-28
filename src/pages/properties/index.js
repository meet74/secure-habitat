import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaProvider as SafeAreaView} from 'react-native-safe-area-context';
import { Colors } from "../../constant/Colors";
import { dummyData } from "../../constant/DummyData";
import Card from "../../components/Card";
import {
  Swipeable,
  RectButton,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { screenNames } from "../../navigator/screennames";

const PropertiesScreen = (props) => {
  const userData = useSelector((state) => state.user);
  console.log("user",userData.user);
  const handleAddProperty = () => {
    props.navigation.navigate(screenNames.addPropertyPage);
  }

  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    console.log(userData.user.myprops);

    return (
      <RectButton style={{ ...styles.rightActionContainer }}>
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
  return (
    <SafeAreaView style={styles.container}>
       <View style ={{marginTop:40}}>
      <GestureHandlerRootView>
       {
        userData.user.myprops.length ?  <FlatList
        data={userData.user.myprops}
        ListHeaderComponent={() => {
          return <Text style={styles.propertiesText}>Your Properties</Text>;
        }}
        ListFooterComponent={() => {
          return  userData.user.myprops.length &&  <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btnText}>{"Add your properties"}</Text>
          </TouchableOpacity>
           
        }}
        renderItem={({ item }) => {
          return (
            <Swipeable renderRightActions={renderRightActions}>
              <Card screen={screenNames.updatePage}  item={item} props={props} />
            </Swipeable>
          );
        }}
      />:
      <View style = {styles.noPropertiesContainer}>
        <Text style = {styles.noPropertiesText}>No Properties found </Text>
        <AntDesign name="frowno" size={75} color={Colors.buttonColor} />
        <TouchableOpacity onPress={handleAddProperty} style={styles.btnContainer}>
        <Text style={styles.btnText}>{"Creat your post"}</Text>
      </TouchableOpacity>
      </View>
       }
       
      </GestureHandlerRootView>
      </View>
    </SafeAreaView>
  );
};

export default PropertiesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  propertiesText: {
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
  btnContainer: {
    width: "80%",
    
    backgroundColor: Colors.buttonColor,
    alignSelf: "center",
    margin: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    padding: 20,
    fontSize: 20,
    letterSpacing: 1,
  },
  noPropertiesText:{
    fontSize: 30,
    color: Colors.buttonColor,
    margin: 40,
    fontWeight: "500",
    fontStyle:"italic"
  },
  noPropertiesContainer:{
    alignItems:"center",
    justifyContent:"center",
    height:"100%"
  }
});
