import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import OGpet from "./OGmetalPet";

export default function App() {
  return (
    <View style={styles.container}>
      <OGpet />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b5d5eb",
    alignItems: "center",
    justifyContent: "center",
  },
});
