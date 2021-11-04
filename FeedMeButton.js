import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
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
      <Button
        onPress={() => {
          pressButton();
        }}
        color="#f194ff"
        disabled={!isHungry}
        title={isHungry ? "FEED ME" : "YUMMM YUMMM YUMMM!!!!!"}
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
