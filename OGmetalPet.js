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

export default function OGpet(props) {
  const [isHungry, setIsHungry] = useState(true);
  const [name, setName] = useState("up to you!");
  return (
    <View style={styles.container}>
      <Text>Hello world! My name is {name} Are you ready to rumble??</Text>
      <TouchableOpacity onPress={() => Alert.alert(`Thanks for the pets!`)}>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={{ width: 200, height: 200 }}
        />
      </TouchableOpacity>

      <TextInput
        placeholder="Name your pet!"
        onChangeText={(name) => setName(name)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        color="#f194ff"
        disabled={!isHungry}
        title={isHungry ? "FEED ME" : "YUMMM"}
      />
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
