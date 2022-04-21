import { StatusBar } from "expo-status-bar";
import * as React from "react";

import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import Levi from "./Levi";
import Basil from "./Basil";
import HomeScreen from "./HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome. Choose your pet." }}
        />
        <Stack.Screen name="Levi" component={Levi} />
        <Stack.Screen name="Basil" component={Basil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
