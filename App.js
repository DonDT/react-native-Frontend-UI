import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Explore from "./screens/Explore";
import Saved from "./screens/Saved";
import Inbox from "./screens/Inbox";
import Trips from "./screens/Trips";
import Profile from "./screens/Profile";

import Ionicons from "react-native-vector-icons/Ionicons";

import { createAppContainer } from "react-navigation";

const appNavigator = createBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: "EXPLORE",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-search" color={tintColor} size={24} />
        )
      }
    },
    Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarLabel: "SAVED",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-heart" color={tintColor} size={24} />
        )
      }
    },
    Trips: {
      screen: Trips,
      navigationOptions: {
        tabBarLabel: "EXPLORE",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-jet" color={tintColor} size={24} />
        )
      }
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: "INBOX",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-chatboxes" color={tintColor} size={24} />
        )
      }
    },
    Inbox: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "PROFILE",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-person" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "gold",
      inactiveTintColor: "grey",
      style: {
        backgroundColor: "white",
        borderTopWidth: 0, // these classes below gives the shadow that contains the tabs.
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default createAppContainer(appNavigator);
