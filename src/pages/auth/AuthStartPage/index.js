import { View, Text,StyleSheet,Image,Dimensions,TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/Colors';
import { Fontisto } from '@expo/vector-icons';
import { screenNames } from '../../../navigator/screennames';

 // Dimensions of the screen
 const { width, height } = Dimensions.get("window");


const AuthStartupPage = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <Image source={require("../../../../assets/images/authstartimg.png")} style = {styles.img}/>
      <Text style = {styles.header}>Ready to <Text style = {{fontWeight: "bold",}}>explore? </Text>✋</Text>
      <TouchableOpacity onPress={() => navigation.navigate(screenNames.login)}>
          <View style={styles.buttonContainer}>
          <Fontisto name="email" size={22} color="white" style = {styles.emailIcon}/> 
            <Text style={styles.buttonText}>Continue with email</Text>
          </View>
        </TouchableOpacity>
        <View style = {styles.lineContainer}>
            <View style = {styles.line}/>
            <Text style = {styles.paragraph}>or Login With </Text>
            <View style = {styles.line}/>
        </View>

        <TouchableOpacity onPress={() => Alert.alert("This Feature is coming soon!!!")}>
          <View style={styles.googleButtonContainer}>
            <Image
              source={require("../../../../assets/images/google-logo.png")}
              style={styles.googleLogo}
            />
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </View>
        </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryColor,
      },
      img:{
        width:width,
        height:height*0.6,
        resizeMode:"cover",
        borderRadius:20
      },
      header: {
        fontSize: 30,
        
        margin: 20,
        color: "white",

      },
      buttonContainer: {
        width: width * 0.9,
        height: 50,
         alignSelf:"center",
        backgroundColor: Colors.buttonColor,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
        flexDirection:"row"
      },
      buttonText: {
        color: "white",
        fontSize: 16,
      },
      emailIcon:{
        alignSelf:"center",
        margin:10
      },
      line:{
        borderWidth:0.5,
        borderColor:"gray",
        width:width*0.3,
        margin:10
      },
      lineContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
      },
      paragraph: {
        
        color: "gray",

      },
      googleButtonContainer: {
        width: width * 0.8,
        height: 50,
        backgroundColor: "rgba(119,136,153,0.3)",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 10,
        flexDirection: "row",
        margin:20
      },
      googleLogo: {
        height: 30,
        width: 30,
        marginHorizontal: 15,
      },
      googleButtonText: {
        fontSize: 15,
        color:"white"
      },
})


export default AuthStartupPage