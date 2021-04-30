import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import Notification from "../screens/Notifications";
import Search from "../screens/Search";
import { Ionicons } from "@expo/vector-icons";
import TabIcon from '../components/nav/TabIcon'

const Tabs = createBottomTabNavigator();
export default function LoggedInNav() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        showLabel:false,
        activeTintColor: "white",
        style: {
          borderBottomColor: "rgba(255,255,255,0.2)",
          backgroundColor: "black",
          size:20
        }
      }}
    >
      <Tabs.Screen name="Home" component={Feed} options={{
        tabBarIcon: ({ focused, color, size }) => <TabIcon focused={focused} iconName={"home"} color={color}/>
      }} />
      <Tabs.Screen name="Search" component={Search} options={{
        tabBarIcon: ({ focused, color, size }) => <TabIcon focused={focused} iconName={"search"} color={color} />
      }}/>
      <Tabs.Screen name="Camera" component={Profile} options={{
        tabBarIcon: ({ focused, color, size }) => <TabIcon focused={focused} iconName={"camera"} color={color} />
      }}/>
      <Tabs.Screen name="Notifications" component={Notification} options={{
        tabBarIcon: ({ focused, color, size }) => <TabIcon focused={focused} iconName={"heart"} color={color} />
      }}/>
      <Tabs.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ focused, color, size }) => <TabIcon focused={focused} iconName={"person"} color={color} />
      }}/>
    </Tabs.Navigator>
  );
}
