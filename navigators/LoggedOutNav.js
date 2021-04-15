import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import CreateAccount from "../screens/CreateAccount";
import Login from "../screens/Login";
import { AppearanceProvider } from "react-native-appearance";
import { Appearance } from "react-native";

const Stack = createStackNavigator();
export default function LoggedOutNav() {
  const subscription = Appearance.addChangeListener(({ colorScheme }) => {
    console.log(colorScheme);
  });
  return (
    <AppearanceProvider>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: "black",
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: false,
            headerTintColor: "white",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{
            headerTitle: false,
            headerTintColor: "white",
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </AppearanceProvider>
  );
}
