import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
  Platform,
  TouchableOpacity
} from "react-native";
import { Colors } from "../../constant/Colors";
import { screenNames } from "../../navigator/screennames";


 // Dimensions of the screen
 const { width, height } = Dimensions.get("window");


const OnBoarding = ({ navigation }) => {
  // State to manage current page of the slider
  const [currentPage, setCurrentPage] = useState(0);

  // Reference for the ScrollView
  const scrollRef = useRef();

 

  // Function to handle scroll event and update current page
  const handleScroll = (event) => {
    const { x } = event.nativeEvent.contentOffset;
    const pageIndex = Math.floor(x / width);
    
    setCurrentPage(pageIndex);
  };

  // Function to handle next button press
  const handleNextPress = () => {
    const nextPage = (currentPage + 1) % 2; // Loop back to the first page after the last page
    const offsetX = nextPage * width;
    scrollRef.current.scrollTo({ x: offsetX, animated: true });
    setCurrentPage(nextPage);
  };

  const handleGetStarted = ()=>{
    navigation.navigate(screenNames.authstartup)
  }

  // Effect to auto scroll to next page after a certain time interval
  useEffect(() => {
    const slideTimer = setInterval(() => {
      handleNextPress();
    }, 3000);

    return () => clearInterval(slideTimer); // Clear the interval on component unmount
  }, [currentPage]); // Re-run effect when currentPage changes

  return (
    <View style={styles.container}>
     
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ref={scrollRef}
      >
        {[1, 2].map((pageNumber) => (
          <View key={pageNumber} style={{ width, height }}>
            <View style={styles.content}>
              <Text style={styles.header}>
                {/* Header Text based on the page number */}
                {pageNumber === 1 && "Find best place to stay in good price 😊"}
                {pageNumber === 2 && "Swiftly list your property for rent! 🤑"}
              </Text>
              <Text style={styles.paragraph}>
                {/* Description Text based on the page number */}
                {pageNumber === 1 &&
                  "Your dream home is just a click away! 🏡"}
                {pageNumber === 2 &&
                  "Effortlessly fast-track the rental process for your property with a single click!"}
              </Text>
              <TouchableOpacity onPress={pageNumber === 2 ? handleGetStarted:handleNextPress}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{pageNumber === 2 ? "Get Started" :"Next"}</Text>
          </View>
        </TouchableOpacity>
              <View style={styles.pagination}>
        {[0, 1].map((index) => (
          <View
            key={index}
            style={[styles.dot, { opacity: currentPage === index ? 1 : 0.2 }]}
          />
        ))}
      </View>
            </View>
            <Image
              source={
                pageNumber === 1
                  ? require(`../../../assets/images/onboarding-1.png`)
                  : pageNumber === 2
                  ? require(`../../../assets/images/onboarding-2.png`)
                  : require(`../../../assets/images/onboarding-3.png`)
              }
              style={styles.image}
            />
          </View>
        ))}
      </ScrollView>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    borderRadius:25
  },
  skipText: {
    color: Colors.primaryColor,
    fontSize: 16,
    marginRight: 25,
    marginTop: Platform.OS === "ios" ? 0 : 40,
    alignSelf: "flex-end",
  },
  content: {
    flex: 1,
    justifyContent: "center",
   
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  paragraph: {
    fontSize: 17,
    color: "gray",
    color: "white",
  },
  pagination: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "white",
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: width * 0.4,
    height: 50,
   
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
});

export default OnBoarding;
