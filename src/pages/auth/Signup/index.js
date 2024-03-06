import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../../../constant/Colors";
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { screenNames } from "../../../navigator/screennames";
import {auth} from '../../../config/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

const { width, height } = Dimensions.get("screen");
const SignUpPage = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [value, setValue] = React.useState({
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    error: "",
  });

  const handleSignUp = async () => {
    // Check if any field is empty
    
    if (
      value.fullName === '' ||
      value.email === ''||
      value.password === ''
    ) {
     
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.replace(screenNames.login);
    } catch (error) {
      let errorMessage = "";
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "Email already in use.";
          break;
        case "auth/weak-password":
          errorMessage = "Password should be at least 6 characters.";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address.";
          break;
        default:
          errorMessage = "An error occurred. Please try again later.";
      }
      setValue({
        ...value,
        error: errorMessage,
      });
    }

  };
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.container}>
      <Image
          source={require("../../../../assets/images/logo.png")}
          style={styles.logoImg}
        />
         <Text style={styles.logoTxt}>Secure Habitat</Text>
      </View>

      <Text style = {styles.header}>Login</Text>
      {/* <Text style = {styles.paragraph}>Use Credentials to acees your account</Text> */}
      <View style={styles.signinContainer}>
       
      <View style={styles.inputDecoration}>
      <FontAwesome name="user" size={24} color={Colors.buttonColor} />
          <TextInput
            
            placeholderTextColor={Colors.buttonColor}
            placeholder="Your name"
            style={styles.inputText}
            onChangeText={(data) => setValue({...value,fullName:data})}
          />
        </View>


        <View style={styles.inputDecoration}>
          <MaterialCommunityIcons name="email-outline" size={24} color={Colors.buttonColor} />
          <TextInput
          placeholderTextColor={Colors.buttonColor}
            placeholder="abc@email.com"
            style={styles.inputText}
            onChangeText={(data) => setValue({...value,email:data})}
          />
        </View>
        

        <View style={styles.inputDecoration}>
          <MaterialIcons name="lock-outline" size={24} color={Colors.buttonColor} />
          <TextInput
            secureTextEntry={true}
            placeholderTextColor={Colors.buttonColor}
            placeholder="Your password"
            style={styles.inputText}
            onChangeText={(data) => setValue({...value,password:data})}
          />
        </View>


        <View style={styles.forgotpasscontainer}>
          {/* <View style={styles.switchContainer}>
            <Switch
              trackColor={{ false: "#767577", true: Colors.primaryColor }}
              style={styles.switchStyle}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />

            <Text style={styles.rememberme}>Remember me</Text>
          </View> */}
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.resetPassword)}
          >
            <Text style={styles.rememberme}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleSignUp}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Sign up</Text>
          </View>
        </TouchableOpacity>

        <View style = {styles.lineContainer}>
            <View style = {styles.line}/>
            <Text style = {styles.paragraph}>or Signup With </Text>
            <View style = {styles.line}/>
        </View>
      </View>

      <TouchableOpacity >
        <View style={styles.googleButtonContainer}>
          <Image
            source={require("../../../../assets/images/google-logo.png")}
            style={styles.googleLogo}
          />
          <Text style={styles.googleButtonText}>Signup with Google</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.alreadyTextContainer}>
        <Text style={styles.alreadyText}>Already have an Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(screenNames.login)}>
          <Text style={styles.signUpText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeareaview: {
    backgroundColor: Colors.primaryColor,
    flex: 1,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  logoImg: {
    height: 100,
    width: 150,
    resizeMode: "contain",
  },
  logoTxt: {
    fontSize: 35,
    color: "white",
    margin:20,
    letterSpacing: 1,
  },
  line:{
    borderWidth:0.5,
    borderColor:"gray",
    width:width*0.2,
    margin:5
  },
  lineContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
  },
  inputDecoration: {
    
    margin: 10,
    backgroundColor:"rgba(37, 176, 243,0.1)",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
  },
  header: {
    fontSize: 25,
    
    marginTop: 20,
    marginLeft:30,
    color: "white",

  },
  paragraph: {
    marginTop: 5,
    marginLeft:20,
    color: "gray",

  },
  inputText: {
    padding: 10,
    flex: 1,
    color:Colors.buttonColor
  },
  signinText: {
    fontSize: 24,
    color: "white",
    letterSpacing: 1,
    margin: 5,
    marginLeft: 20,
    marginBottom: 10,
  },
  signinContainer: {
    padding: 20,
    marginTop: 5,
  },
  switchStyle: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  forgotpasscontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  buttonContainer: {
    width: width * 0.8,
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
  },
  orTextContainer: {
    alignItems: "center",
  },
  orText: {
    fontSize: 18,
    color: "gray",
    fontWeight: "400",
  },
  googleButtonContainer: {
    width: width * 0.8,
    height: 50,
    backgroundColor: "rgba(255,255,255,0.8)",
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
  },
  googleLogo: {
    height: 30,
    width: 30,
    marginHorizontal: 15,
  },
  googleButtonText: {
    fontSize: 15,
  },
  alreadyText: {
    marginHorizontal: 10,
    color:"white"
  },

  signUpText: {
    color: "white",
    fontWeight: "bold",
  },
  alreadyTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 25,
    
  },
  rememberme:{
    color:"white"
  }
});

export default SignUpPage;
