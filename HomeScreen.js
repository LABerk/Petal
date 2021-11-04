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

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello there! Pick your pet.</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Levi", { name: "Levi" })}
      >
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4UFWmVT6fALHNi_bAUgJCncOIOnBSsJqewA&usqp=CAU",
          }}
          style={{ width: 200, height: 200 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Basil", { name: "Basil" })}
      >
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJeVu4Bd2mwTFx6j5Tsqr4e1i8VrS0ZFEPw&usqp=CAU",
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
