import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Feed from "../../screens/Feed";
import Profile from "../../screens/Profile";
import MyProfile from "../../screens/MyProfile";
import Notification from "../../screens/Notifications";
import Photo from "../../screens/Photo";
import Search from "../../screens/Search";
import { Image } from "react-native";

const Stack = createStackNavigator();

export default function StackNavFactory({ screenName }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerBackTitleVisible: false,
        headerStyle: {
          shadowColor: "rgba(255,255,255,0.5)",
          backgroundColor: "black",
        },
      }}
    >
      {screenName === "Feed" ? (
        <Stack.Screen
          name={"Home"}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  maxHeight: 40,
                }}
                resizeMode="contain"
                source={require("../../assets/logo.png")}
              />
            ),
          }}
          component={Feed}
        />
      ) : null}
      {screenName === "Search" ? (
        <Stack.Screen name={screenName} component={Search} />
      ) : null}
      {screenName === "Notification" ? (
        <Stack.Screen name={screenName} component={Notification} />
      ) : null}
      {screenName === "MyProfile" ? (
        <Stack.Screen name={screenName} component={MyProfile} />
      ) : null}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
    </Stack.Navigator>
  );
}
