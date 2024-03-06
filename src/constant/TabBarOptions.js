import { Colors } from "./Colors";
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

export const tabBarOptions = {
  Home: {
    headerShown: false,
    tabBarLabel: "Home",
    tabBarActiveTintColor: Colors.buttonColor,
    tabBarIcon: (tabInfo) => {
      return (
        <MaterialCommunityIcons
          name="view-dashboard"
          size={24}
          color={tabInfo.focused ? Colors.buttonColor : "#8e8e93"}
        />
      );
    },
  },
  Search: {
    headerShown: false,

    tabBarLabel: "Search",

    tabBarActiveTintColor: Colors.buttonColor,

    tabBarIcon: (tabInfo) => {
      return (
        <Feather
          name="search"
          size={24}
          color={tabInfo.focused ? Colors.buttonColor : "#8e8e93"}
        />
      );
    },
  },
  Favourite: {
    headerShown: false,

    tabBarLabel: "Favourite",

    tabBarActiveTintColor: Colors.buttonColor,

    tabBarIcon: (tabInfo) => {
      return (
        <MaterialIcons
          name="favorite-border"
          size={24}
          color={tabInfo.focused ? Colors.buttonColor : "#8e8e93"}
        />
      );
    },
  },
  Notification: {
    headerShown: false,

    tabBarLabel: "Notification",

    tabBarActiveTintColor: Colors.buttonColor,

    tabBarIcon: (tabInfo) => {
      return (
        <Ionicons
          name="notifications"
          size={24}
          color={tabInfo.focused ? Colors.buttonColor : "#8e8e93"}
        />
      );
    },
  },
  Profile: {
    headerShown: false,
    tabBarLabel: "Profile",
    tabBarActiveTintColor: Colors.buttonColor,
    tabBarIcon: (tabInfo) => {
      return (
        <FontAwesome
          name="user"
          size={24}
          color={tabInfo.focused ? Colors.buttonColor : "#8e8e93"}
        />
      );
    },
  },
};
