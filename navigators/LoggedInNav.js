import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import MyProfile from "../screens/MyProfile";
import Notification from "../screens/Notifications";
import Search from "../screens/Search";
import { Ionicons } from "@expo/vector-icons";
import TabIcon from "../components/nav/TabIcon";
import StackNavFactory from "../components/nav/StackNavFactory";

const Tabs = createBottomTabNavigator();
export default function LoggedInNav() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "white",
        style: {
          borderBottomColor: "rgba(255,255,255,0.2)",
          backgroundColor: "black",
          size: 20,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} iconName={"home"} color={color} />
          ),
        }}
      >
        {() => <StackNavFactory screenName="Feed" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} iconName={"search"} color={color} />
          ),
        }}
      >
        {() => <StackNavFactory screenName="Search" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Camera"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} iconName={"camera"} color={color} />
          ),
        }}
      >
        {() => <StackNavFactory screenName="Camera" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} iconName={"heart"} color={color} />
          ),
        }}
      >
        {() => <StackNavFactory screenName="Notification" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} iconName={"person"} color={color} />
          ),
        }}
      >
        {() => <StackNavFactory screenName="MyProfile" />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
