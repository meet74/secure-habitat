import { FlatList, SafeAreaView, StyleSheet, Text, View,Animated } from "react-native";
import React from "react";
import { Colors } from "../../constant/Colors";
import { dummyData } from "../../constant/DummyData";
import Card from "../../components/Card";
import {Swipeable,RectButton,GestureHandlerRootView} from 'react-native-gesture-handler'
import { useSelector } from "react-redux";

const FavouriteScreen = (props) => {

  const propsData = useSelector((state) => state.properties);

    const  renderRightActions = (progress, dragX) => {
        const trans = dragX.interpolate({
          inputRange: [0, 50, 100, 101],
          outputRange: [-20, 0, 0, 1],
        });
       

        console.log(progress );
        return (
          <RectButton style={{...styles.rightActionContainer}} >
            <Animated.Text
              style={[
                styles.actionText,
                {
                  transform: [{ translateX: trans }],
                },
              ]}>
              Remove
            </Animated.Text>
          </RectButton>
        );
      };
  return (
    <SafeAreaView style={styles.container}>
       < GestureHandlerRootView>
      <FlatList
        data={propsData.props}
        ListHeaderComponent={() => {
         return  <Text style={styles.favoriteText}>Your Favourites</Text>;
        }}
        renderItem={({ item }) => {
          return (
            <Swipeable renderRightActions={renderRightActions}>
          <Card item={item} props={props}/>
          </Swipeable>
          )
        }}
      />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default FavouriteScreen;

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
  actionText:{
    color:"red",
    fontSize:20
  },
  rightActionContainer:{
   
    alignItems:"center",
    justifyContent:"center",
   
   
    paddingVertical: 10,
    paddingHorizontal: 20,
 
    
  }
});

