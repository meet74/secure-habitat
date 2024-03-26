import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, Alert, TouchableOpacity } from "react-native";
import { CardField, StripeProvider, useConfirmPayment } from "@stripe/stripe-react-native";
import { Colors } from "../../../constant/Colors";
import Receipt from "../../../components/Reciept";
import { screenNames } from "../../../navigator/screennames";
import { firestore } from "../../../config/firebase";
import { arrayUnion, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { set_props } from "../../../store/action/user";

//ADD localhost address of your server
const API_URL = "http://localhost:3000";
const PUBLISHABLE_KEY = "pk_test_51Ox9ZCKrSiwlcSaVGbejRuuHhRc4NsMH1jDPlrkX5PqZchh0cQFwXgHddbDHA25ITXMmX4jeW7XIkCADrQSCpHdw00BKuODcV5";


const StripeApp = (props) => {
    const {property} = props.route.params
  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  const userData = useSelector(state=>state.user)
  const notificationFun = (title, type) => { return {
    message:`Your appointment for ${title} is ${type}`
  }}
  const { confirmPayment, loading } = useConfirmPayment();
 const dispatch = useDispatch();
  const SECRET_KEY = "sk_test_51Ox9ZCKrSiwlcSaVhF0ua9SFg64DPv4fmPhOxtmXZn5ze8k1wdTO0coWGFqq8x5rjsKNgycZD0l3XhQn5dKRWtMF00tcqCUr1F";
  const fetchPaymentIntentClientSecret = async () => {
    console.log("Shreehari");
    const response = await fetch(`${API_URL}/create-payment-intent?email=${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${SECRET_KEY}`,
      },
    //   body: JSON.stringify({
    //     email: email, // Include the email entered by the user
    //   }),
    });
    const { clientSecret, error } = await response.json();
    return { clientSecret, error };
  };

  const addData = async() => {
    const newProps = {
        id:Math.floor(Math.random() * 100) + 1,
        address: property.address,
        city: property.city,
        description: property.description,     
        image: property.image, 
        price: property.price,
        title: property.title,
        type:property.type,
        owner: property.owner,
        amenities:property.amenities
    }
    dispatch(set_props(newProps))
      

      const userArrRef = doc(firestore, "users", "usersArr");
      const userArrSnap = await getDoc(userArrRef);
  
    
      if (userArrSnap.exists()) {
        // Update the userArr document's bookings array with the new booking
        const userDataArr = userArrSnap.data().users
        //console.log(userData.user.id);
        const particularUser = userDataArr.find(u=>u.uid === userData.user.id)
        //console.log("d"+particularUser);
        const tempUser = { ...particularUser}
        console.log("user"+userData.user.id);
        const oldProperties = [...tempUser.properties]
        console.log(oldProperties.length);
       oldProperties.push(newProps)
        
       console.log(oldProperties.length);
        const newUserData = {
         ...tempUser,
         properties:oldProperties
        }
        
        console.log("filterOld"+newUserData.properties[0]);
        const filteredArr = userDataArr.filter(data=>data.uid !== userData.user.id);
        console.log("filter"+filteredArr.length);
        filteredArr.push(newUserData)
       
        oldProperties.forEach(element => {
            console.log("ele",element);
            console.log("loop"+element.title);
          });
        try {
            await updateDoc(userArrRef, {
                users: filteredArr
            });
        } catch (error) {
            console.log(error);
        }
        console.log("Porperty Added successfully.");
    } else {
        console.log("userArr document does not exist.");
    }

  }

  const handlePayPress = async () => {
    //1.Gather the customer's billing information (e.g., email)
    if (!cardDetails?.complete || !email) {
      Alert.alert("Please enter Complete card details and Email");
      return;
    }
    const billingDetails = {
      email: email,
    };
    //2.Fetch the intent client secret from the backend
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();
      //2. confirm the payment
      if (error) {
        console.log("Unable to process payment");
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails: billingDetails,
          paymentMethodType:"Card",
        });
        if (error) {
            console.log(error.message);
          alert(`Payment Confirmation Error ${error.message}`);
          props.navigation.pop()
        } else if (paymentIntent) {
          alert("Payment Successful");
          console.log("Payment successful ", paymentIntent);
         await addData();
          props.navigation.navigate(screenNames.properties)
        }
      }
    } catch (e) {
      console.log(e);
      //props.navigation.pop()
    }
    //3.Confirm the payment with the card details
  };

  return (
    <StripeProvider publishableKey={PUBLISHABLE_KEY}>
    <View style={styles.container}>
    <View style={styles.imgContainer}>
        <Image
          source={require("../../../../assets/images/logo.png")}
          style={styles.logoImg}
        />
        <Text style={styles.logoTxt}>Secure Habitat</Text>
      </View>
      <Receipt/>
      <TextInput
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="email-address"
        onChange={value => setEmail(value.nativeEvent.text)}
        style={styles.input}
      />
      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={cardDetails => {
          setCardDetails(cardDetails);
        }}
      />
      <TouchableOpacity disabled = {loading} style={styles.addButton} onPress={handlePayPress}>
            <Text style={styles.buttonText}>Pay Now</Text>
            </TouchableOpacity>
    </View>
    </StripeProvider>
  );
};
export default StripeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    
    backgroundColor:Colors.primaryColor
  },
  imgContainer: {
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
    margin: 20,
    letterSpacing: 1,
  },
  input: {
    backgroundColor: "#efefefef",
    margin:15,
    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  addButton: {
    backgroundColor: "#25B0F3",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    width:"90%",
    alignSelf:"center"
},
buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
},
  card: {
    backgroundColor: "#efefefef",
  },
  cardContainer: {
    height: 50,
    margin: 15,
  },
});