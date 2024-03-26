import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { Colors } from "../../../constant/Colors";
import { useDispatch, useSelector } from "react-redux";
import { delete_props, set_props, update_props } from "../../../store/action/user";
import { firestore } from "../../../config/firebase";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { screenNames } from "../../../navigator/screennames";

const UpdatePropertyScreen = (props) => {
    const userData = useSelector((state) => state.user);
    console.log("user",userData.user);
  const { item } = props.route.params;
  
  const [property, setProperty] = useState({
    id: item.id,
    address: item.address,
    city: item.city,
    description: item.description,
    image: item.image,
    price: item.price,
    title: item.title,
    type: item.type,
    owner: item.owner,
    amenities: item.amenities,
  });

  const dispatch = useDispatch();

  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const handleCitySelection = (value) => {
    setProperty({ ...property, city: value });
    setTimeout(() => {
      setIsPickerVisible(false);
    }, 1000);
  };

  const [isTypePickerVisible, setIsTypePickerVisible] = useState(false);

  const handleTypeSelection = (value) => {
    setProperty({ ...property, type: value });
    setTimeout(() => {
      setIsTypePickerVisible(false);
    }, 1000);
  };

  const handleUpdateProperty = async () => {
    const updatedProps = {
      id: property.id,
      address: property.address,
      city: property.city,
      description: property.description,
      image: property.image,
      price: property.price,
      title: property.title,
      type: property.type,
      owner: property.owner,
      amenities: property.amenities,
    };
    // Add your logic to handle adding the property to your database


    const userArrRef = doc(firestore, "users", "usersArr");
    const userArrSnap = await getDoc(userArrRef);
    dispatch(update_props(updatedProps));

    if (userArrSnap.exists()) {
      // Update the userArr document's bookings array with the new booking
      const userDataArr = userArrSnap.data().users;

      const particularUser = userDataArr.find(
        (u) => u.uid === userData.user.id
      );

      const tempUser = { ...particularUser };

      const oldProperties = [...tempUser.properties];
    
      const filteredProperties = oldProperties.filter(
        (props) => props.id !== updatedProps.id
      );


      filteredProperties.push(updatedProps);
    

      const newUserData = {
        ...tempUser,
        properties: filteredProperties,
      };

      const filteredArr = userDataArr.filter(
        (data) => data.uid !== userData.user.id
      );

      filteredArr.push(newUserData);

      try {
        await updateDoc(userArrRef, {
          users: filteredArr,
        });
      } catch (error) {
        console.log(error);
      }
      console.log("Property Updated successfully.");
    } else {
      console.log("userArr document does not exist.");
    }
    // Clear the form fields after adding the property
    setProperty({
      address: "",
      city: "",
      description: "",
      image: "",
      price: "",
      title: "",
      type: "",
      owner: "",
      amenities: [],
    });

    props.navigation.navigate(screenNames.properties);
  };

  const handleDeleteProperty = async() => {

    const userArrRef = doc(firestore, "users", "usersArr");
    const userArrSnap = await getDoc(userArrRef);
    dispatch(delete_props(property.id));

    if (userArrSnap.exists()) {
        // Update the userArr document's bookings array with the new booking
        const userDataArr = userArrSnap.data().users;
  
        const particularUser = userDataArr.find(
          (u) => u.uid === userData.user.id
        );
  
        const tempUser = { ...particularUser };
  
        const oldProperties = [...tempUser.properties];

        const filteredProperties = oldProperties.filter(
          (props) => props.id !== property.id
        );

  
   
      
  
        const newUserData = {
          ...tempUser,
          properties: filteredProperties,
        };
  
        const filteredArr = userDataArr.filter(
          (data) => data.uid !== userData.user.id
        );
  
        filteredArr.push(newUserData);
  
        try {
          await updateDoc(userArrRef, {
            users: filteredArr,
          });
        } catch (error) {
          console.log(error);
        }
        console.log("Property Updated successfully.");
      } else {
        console.log("userArr document does not exist.");
      }
      // Clear the form fields after adding the property
      setProperty({
        address: "",
        city: "",
        description: "",
        image: "",
        price: "",
        title: "",
        type: "",
        owner: "",
        amenities: [],
      });
  
      props.navigation.navigate(screenNames.properties);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.viewContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header}>Update Property</Text>
        <View style={styles.input}>
          <MaterialCommunityIcons
            style={{ margin: 10 }}
            name="map-marker"
            size={24}
            color={Colors.buttonColor}
          />
          <TextInput
            style={{ color: Colors.buttonColor }}
            placeholderTextColor={Colors.buttonColor}
            placeholder="Address"
            value={property.address}
            onChangeText={(text) => setProperty({ ...property, address: text })}
          />
        </View>
        {/* <View style={styles.input}>
        <MaterialCommunityIcons
            style={{ margin: 10 }}
            name="city"
            size={24}
            color={Colors.buttonColor}
        />
        
        </View> */}
        <TouchableOpacity
          activeOpacity={1}
          style={styles.input}
          onPress={() => setIsPickerVisible(true)}
        >
          <MaterialCommunityIcons
            style={{ margin: 10 }}
            name="city"
            size={24}
            color={Colors.buttonColor}
          />
          <Text style={{ color: Colors.buttonColor, fontSize: 14 }}>
            {property.city ? property.city : "Select City"}
          </Text>
          {isPickerVisible && (
            <Picker
              selectedValue={property.city}
              onValueChange={(value) => handleCitySelection(value)}
              style={styles.picker}
            >
              <Picker.Item
                color={Colors.buttonColor}
                label="Halifax"
                value="Halifax"
              />
              <Picker.Item
                color={Colors.buttonColor}
                label="Montreal"
                value="Montreal"
              />
              <Picker.Item
                color={Colors.buttonColor}
                label="Toronto"
                value="Toronto"
              />
              <Picker.Item
                color={Colors.buttonColor}
                label="Vancouver"
                value="Vancouver"
              />
            </Picker>
          )}
        </TouchableOpacity>
        <View style={styles.input}>
          <Feather
            name="file-text"
            style={{ margin: 10 }}
            size={24}
            color={Colors.buttonColor}
          />
          <TextInput
            style={{ color: Colors.buttonColor }}
            placeholderTextColor={Colors.buttonColor}
            placeholder="Description"
            value={property.description}
            onChangeText={(text) =>
              setProperty({ ...property, description: text })
            }
            multiline={true}
            numberOfLines={4} // You can adjust the number of lines as needed
          />
        </View>
        <View style={styles.input}>
          <MaterialCommunityIcons
            style={{ margin: 10 }}
            name="image"
            size={24}
            color={Colors.buttonColor}
          />
          <TextInput
            style={{ color: Colors.buttonColor }}
            placeholderTextColor={Colors.buttonColor}
            placeholder="Image URL"
            value={property.image}
            onChangeText={(text) => setProperty({ ...property, image: text })}
          />
        </View>
        <View style={styles.input}>
          <MaterialCommunityIcons
            style={{ margin: 10 }}
            name="currency-usd"
            size={24}
            color={Colors.buttonColor}
          />
          <TextInput
            style={{ color: Colors.buttonColor }}
            placeholderTextColor={Colors.buttonColor}
            placeholder="Price"
            value={property.price}
            onChangeText={(text) => setProperty({ ...property, price: text })}
          />
        </View>
        <View style={styles.input}>
          <MaterialCommunityIcons
            style={{ margin: 10 }}
            name="tag"
            size={24}
            color={Colors.buttonColor}
          />
          <TextInput
            style={{ color: Colors.buttonColor }}
            placeholderTextColor={Colors.buttonColor}
            placeholder="Title"
            value={property.title}
            onChangeText={(text) => setProperty({ ...property, title: text })}
          />
        </View>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.input}
          onPress={() => setIsTypePickerVisible(true)}
        >
          <MaterialCommunityIcons
            style={{ margin: 10 }}
            name="home"
            size={24}
            color={Colors.buttonColor}
          />

          <Text style={{ color: Colors.buttonColor, fontSize: 14 }}>
            {property.type ? property.type : "Type"}
          </Text>
          {isTypePickerVisible && (
            <Picker
              selectedValue={property.type}
              onValueChange={(value) => handleTypeSelection(value)}
              style={styles.picker}
            >
              <Picker.Item
                color={Colors.buttonColor}
                label="Home"
                value="Home"
              />
              <Picker.Item
                color={Colors.buttonColor}
                label="Bunglow"
                value="Bunglow"
              />
              <Picker.Item
                color={Colors.buttonColor}
                label="Apartment"
                value="Apartment"
              />
            </Picker>
          )}
        </TouchableOpacity>

        <View style={styles.input}>
          <MaterialCommunityIcons
            style={{ margin: 10 }}
            name="account"
            size={24}
            color={Colors.buttonColor}
          />
          <TextInput
            style={{ color: Colors.buttonColor }}
            placeholderTextColor={Colors.buttonColor}
            placeholder="Owner"
            value={property.owner}
            onChangeText={(text) => setProperty({ ...property, owner: text })}
          />
        </View>
        <View style={styles.input}>
          <MaterialCommunityIcons
            style={{ margin: 10 }}
            name="format-list-checkbox"
            size={24}
            color={Colors.buttonColor}
          />
          <TextInput
            style={{ color: Colors.buttonColor }}
            placeholderTextColor={Colors.buttonColor}
            placeholder="Amenities (comma-separated)"
            value={property.amenities.join(",")}
            onChangeText={(text) =>
              setProperty({ ...property, amenities: text.split(",") })
            }
          />
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleUpdateProperty}
        >
          <Text style={styles.buttonText}>Update Property</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeleteProperty}
        >
          <Text style={styles.deleteButtonText}>Delete Property</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => props.navigation.pop()}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#12232B",
  },
  viewContainer: {
    margin: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#25B0F3",
  },
  input: {
    margin: 10,
    backgroundColor: "rgba(37, 176, 243,0.1)",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: "#25B0F3",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  picker: {
    flex: 1,
    color: Colors.buttonColor,
  },
  deleteButton:{
    backgroundColor: "red",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  deleteButtonText:{
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  }
});

export default UpdatePropertyScreen;
