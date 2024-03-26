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
  TouchableOpacity,
  ActivityIndicator,
  Pressable
} from "react-native";
import React, { useState, useRef,useEffect } from "react";
import { Colors } from "../../constant/Colors";
import {
  Entypo,
  AntDesign,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5
} from "@expo/vector-icons";
import BottomSheet from "react-native-raw-bottom-sheet";
import { dummyCities, dummyData } from "../../constant/DummyData";
import GridCard from "../../components/GridCard";
import Card from "../../components/Card";
import {firestore} from '../../config/firebase'
import {doc,getDoc} from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux';
import { storeDataInState } from "../../store/action/properties";
import { screenNames } from "../../navigator/screennames";

const { width, height } = Dimensions.get("screen");

const HomeScreen = (props) => {
  const [city, setcity] = useState(dummyCities[0].name);
  const [Data, setData] = useState(null)
  const [typeSelected, settypeSelected] = useState("house");
  const [isLoading, setisLoading] = useState(true)
  const [mainData, setmainData] = useState([])
  const [recommendationList, setrecommendationList] = useState([])
  const bottomSheetRef = useRef();

  const dispatch = useDispatch();

  const customBtsCityHandler = (city) => {
    bottomSheetRef.current.close();
    setcity(city);
  };

  const filterData = (data) => {
    return data.filter((d) => d.city === city)
  }

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


  useEffect(() => {
    const fetchDataFromDocument = async () => {
      setisLoading(true)
      const documentId = "yn5uQyMELevIRyKmut0V";
      try {

         const docRef = doc(firestore, "properties", documentId);
         const docSnap = await getDoc(docRef);
     
         if (docSnap.exists()) {
          setmainData(docSnap.data().props)
          dispatch(storeDataInState(docSnap.data().props ))
          const tempData = filterData(docSnap.data().props);
          const shuffeledData = shuffle(tempData)
          setrecommendationList(shuffeledData)
          if (tempData) {
        
            setData(tempData)
          }else{
            setData(docSnap.data())
          }
          
         } else {
           console.log("No such document!");
         }
         setisLoading(false)
      } catch (e) {
         console.error("Error getting document:", e);
         setisLoading(false)
      }
     };

    fetchDataFromDocument();
 }, []);

 useEffect(() => {
   
  const tempData = filterData(mainData)
  const tempRecommendedData = shuffle(tempData)
  setData(tempData)
  setrecommendationList(tempRecommendedData)
   
 }, [city])
 

  const typeHandler = (type) => {
    switch(type){
      case "house":
        settypeSelected("house")
        break;
      case "apartment":
      settypeSelected("apartment")
      break;
      case "bunglow":
        settypeSelected("bunglow")
        break;
      default:
        settypeSelected("house")
        break;
    }
  }

  const handleBottomSheet = () => {
    bottomSheetRef.current.open();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity activeOpacity={0.8} onPress={handleBottomSheet}>
            <Text style={styles.locationText}>Location</Text>
            <View style={styles.locationContainer}>
              <Entypo
                name="location-pin"
                size={30}
                color={Colors.buttonColor}
              />
              <Text style={styles.cityText}>{city}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={()=> props.navigation.navigate(screenNames.search)} style={styles.inputDecoration}>
          <AntDesign
            name="search1"
            size={24}
            color={"rgba(37, 176, 243,0.6)"}
          />
          <TextInput
            placeholderTextColor={"rgba(37, 176, 243,0.6)"}
            placeholder="Search"
            onPressIn={()=> props.navigation.navigate(screenNames.search)}
            style={styles.inputText}
            editable = {false}
            
          />
        </TouchableOpacity>

        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() =>  typeHandler("house")} style={styles.headerCard}>
            <FontAwesome name="home" size={30} color={"white"} />
            <Text style={{color:"white"}}>House</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() =>  typeHandler("bunglow")} style={styles.headerCard}>
            <MaterialCommunityIcons name="home-city" size={30}  color={"white"} />

            <Text style={{color:"white"}}>Bunglow</Text>
          </TouchableOpacity >
          <TouchableOpacity  onPress={() =>  typeHandler("apartment")} style={styles.headerCard}>
            <MaterialIcons name="apartment" size={30}  color={"white"} />
            <Text style={{color:"white"}}>Apartment</Text>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.recommendationTextContainer}>
            <Text style={styles.recommendationText}>Recommendations</Text>
            <Text style={styles.seeallText}>See all</Text>
          </View>

          <FlatList
            data={recommendationList}
            horizontal
            renderItem={({ item }) => {
              return <GridCard item={item} props={props}/>;
            }}
          />

          <View style={styles.recommendationTextContainer}>
            <Text style={styles.recommendationText}>Nearby Location</Text>
            <Text style={styles.seeallText}>See all</Text>
          </View>

          {isLoading ? <ActivityIndicator/> :<FlatList
            data={Data}
            renderItem={({ item }) => {
              return <Card item={item} props={props}/>
            }}
          />}
        </View>

        <BottomSheet
          ref={bottomSheetRef}
          height={height * 0.8}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.5)",
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
          }}
          closeOnDragDown={true}
        >
          <View style={bottomSheetStyle.customBtsContainer}>
          <Text style={bottomSheetStyle.customBtsLocationText}>Select your City</Text>
         

          <View style={bottomSheetStyle.customBtsListContainer}>
            <FlatList
              data={dummyCities}
              numColumns={2}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => customBtsCityHandler(item.name)}
                  >
                    <View style={bottomSheetStyle.customBtscityContainer}>
                      <MaterialCommunityIcons
                        name="city"
                        size={45}
                        color={Colors.primaryColor}
                        style={bottomSheetStyle.customBtsCityIcon}
                      />
                      <Text style={bottomSheetStyle.customBtsCityTxt}>
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
        </BottomSheet>
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
    width:"100%",
   
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
  bottomSheetContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
});

const bottomSheetStyle = StyleSheet.create({
  customBtsContainer: {
     margin: 20,

     backgroundColor: Colors.backgroundColor,
  },
  
  customBtscityContainer: {
     borderWidth: 2,
     borderColor: Colors.accentColor,
     borderRadius: 15,
     height:150,
     width:150,
     
     alignItems: "center",
     justifyContent: "center",
     alignSelf: "center",
     margin: 15,
  },
  customBtsCityTxt: {
     paddingVertical: 15,
     fontSize: 20,
     color: Colors.textColor,
  },

  customBtsListContainer: {
    
     alignItems: "center",
     justifyContent: "center",
     alignSelf:"center",
     flexWrap: "wrap",
  },
  customBtsLocationText: {
     fontSize: 28,
     color: Colors.textColor,
     letterSpacing: 1,
     margin: 10,
     
  },
 });



export default HomeScreen;
