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
import ResetPasswordPage from "../pages/auth/ResetPassword";
import OnBoarding from "../pages/onboarding/onboarding";
import SearchScreen from "../pages/search";
import NotificationScreen from "../pages/notification";
import ProfileScreen from "../pages/profile";
import { tabBarOptions } from "../constant/TabBarOptions";
import { Colors } from "../constant/Colors";
import FavouriteScreen from "../pages/favourite";
import PropertiesDetailScreen from "../pages/home/PropertiesDetail";
import BookingConfirmPage from "../pages/home/PropertiesDetail/BookingConfirmPage";

const Navigator = () => {
  const HomeNavigator = createNativeStackNavigator();
  const AuthNavigator = createNativeStackNavigator();
  const MainNavigator = createNativeStackNavigator();
  const BottomNavigator = createBottomTabNavigator();

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
        <AuthNavigator.Screen
          name={screenNames.resetpassword}
          component={ResetPasswordPage}
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
          options={tabBarOptions.Favourite}
          name={screenNames.favorite}
          component={FavouriteScreen}
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
      <MainNavigator.Navigator screenOptions={{ headerShown: false }}>
        <MainNavigator.Screen
          name={screenNames.authflow}
          component={AuthNavFlow}
        />
        <MainNavigator.Screen
          name={screenNames.bottomflow}
          component={BottomFlow}
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
