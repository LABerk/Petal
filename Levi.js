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

export default function Levi({ navigation }) {
  const [isHungry, setIsHungry] = useState(true);
  const [name, setName] = useState("up to you!");
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/purr.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Text>
        Hello world! My name is {name}. I appreciate pets now and again.
      </Text>
      <TouchableOpacity
        onPress={() => Alert.alert(`Thanks for the pets!`)}
        onPress={playSound}
      >
        <Image
          source={{
            uri: "../assets/loungecat.png",
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
