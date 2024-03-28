import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/home";
import { screenNames } from "./screennames";
import AuthStartupPage from "../pages/auth/AuthStartPage";
import Login from "../pages/auth/Login";
import SignupPage from "../pages/auth/Signup";
import OnBoarding from "../pages/onboarding/onboarding";
import SearchScreen from "../pages/search";
import NotificationScreen from "../pages/notification";
import ProfileScreen from "../pages/profile";
import { tabBarOptions } from "../constant/TabBarOptions";
import { Colors } from "../constant/Colors";
import PropertiesDetailScreen from "../pages/home/PropertiesDetail";
import BookingConfirmPage from "../pages/home/PropertiesDetail/BookingConfirmPage";
import PropertiesScreen from "../pages/properties";
import AddPropertyScreen from "../pages/properties/addproperties";
import StripeApp from "../pages/properties/paymentPage";
import UpdatePropertyScreen from "../pages/properties/updateProperties";
import { useSelector } from "react-redux";

const Navigator = () => {
  const HomeNavigator = createNativeStackNavigator();
  const AuthNavigator = createNativeStackNavigator();
  const MainNavigator = createNativeStackNavigator();
  const BottomNavigator = createBottomTabNavigator();
  const PropsNavigator = createNativeStackNavigator();

  const userData = useSelector(state=>state.user)

  const AuthNavFlow = () => {
    return (
      <AuthNavigator.Navigator screenOptions={{ headerShown: false }}>
        <AuthNavigator.Screen
          name={screenNames.onboarding}
          component={OnBoarding}
        />
        <AuthNavigator.Screen
          name={screenNames.authstartup}
          component={AuthStartupPage}
        />
        <AuthNavigator.Screen name={screenNames.login} component={Login} />
        <AuthNavigator.Screen
          name={screenNames.signup}
          component={SignupPage}
        />
        
      </AuthNavigator.Navigator>
    );
  };
  const HomeNavFlow = () => {
    return (
      <HomeNavigator.Navigator screenOptions={{ headerShown: false }}>
        <HomeNavigator.Screen name={screenNames.home} component={HomeScreen} />
        <HomeNavigator.Screen name={screenNames.propertiesDetail} component={PropertiesDetailScreen}/>
        <HomeNavigator.Screen name={screenNames.confirmBookingPage} component={BookingConfirmPage}/>
      </HomeNavigator.Navigator>
    );
  };

  const PropsNavFlow = () => {
    return(
      <PropsNavigator.Navigator screenOptions={{ headerShown: false }}>
        <PropsNavigator.Screen name={screenNames.properties} component={PropertiesScreen}/>
        <PropsNavigator.Screen name={screenNames.addPropertyPage} component={AddPropertyScreen}/>
        <PropsNavigator.Screen name={screenNames.paymentPage} component={StripeApp}/>
        <PropsNavigator.Screen name={screenNames.updatePage} component={UpdatePropertyScreen}/>
      </PropsNavigator.Navigator>
    )
  }

  const BottomFlow = () => {
    return (
      <BottomNavigator.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: Colors.primaryColor }
        }}
      >
        <BottomNavigator.Screen
          options={tabBarOptions.Home}
          name={screenNames.homeflow}
          component={HomeNavFlow}
        />
        <BottomNavigator.Screen
          options={tabBarOptions.Search}
          name={screenNames.search}
          component={SearchScreen}
        />

        <BottomNavigator.Screen
          options={tabBarOptions.Properties}
          name={screenNames.propsFlow}
          component={PropsNavFlow}
        />
        <BottomNavigator.Screen
          options={tabBarOptions.Notification}
          name={screenNames.notification}
          component={NotificationScreen}
        />
        <BottomNavigator.Screen
          options={tabBarOptions.Profile}
          name={screenNames.profile}
          component={ProfileScreen}
        />
      </BottomNavigator.Navigator>
    );
  };
  return (
    <NavigationContainer>
     {
      userData.user.id!==null? 
      <MainNavigator.Navigator screenOptions={{ headerShown: false }}>
      
      <MainNavigator.Screen
        name={screenNames.bottomflow}
        component={BottomFlow}
      />
      <MainNavigator.Screen
        name={screenNames.authflow}
        component={AuthNavFlow}
      />
    </MainNavigator.Navigator>
      : <MainNavigator.Navigator screenOptions={{ headerShown: false }}>
      <MainNavigator.Screen
        name={screenNames.authflow}
        component={AuthNavFlow}
      />
      <MainNavigator.Screen
        name={screenNames.bottomflow}
        component={BottomFlow}
      />
    </MainNavigator.Navigator>
     }
    </NavigationContainer>
  );
};

export default Navigator;
