import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { Audio } from "expo-av";

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Hello there! Pick your pet.</Text>
      <TouchableOpacity>
        <Image
          source={{
            uri: "../assets/loungecat.png",
          }}
          style={{ width: 200, height: 200 }}
        />
      </TouchableOpacity>
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
