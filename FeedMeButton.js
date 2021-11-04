import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Audio } from "expo-av";

export default function FeedMeButton() {
  const [isHungry, setIsHungry] = useState(true);

  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/crunch.mp3")
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
  function pressButton() {
    playSound();
    setIsHungry(false);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          pressButton();
        }}
        disabled={!isHungry}
      >
        <Text color="#f194ff">
          {isHungry ? "FEED ME" : "YUMMM YUMMM YUMMM!!!!!"}
        </Text>
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
