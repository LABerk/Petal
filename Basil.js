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
  Pressable,
} from "react-native";
import { Audio } from "expo-av";
import FeedMeButton from "./FeedMeButton";

export default function Basil({ navigation }) {
  const [isHungry, setIsHungry] = useState(true);
  const [name, setName] = useState("up to you!");
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/howl.mp3")
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
      <Text>Hello world! My name is {name}. I love everything!!</Text>
      <TouchableOpacity
        onPress={() => Alert.alert(`Thanks for the pets!`)}
        onPress={playSound}
      >
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJeVu4Bd2mwTFx6j5Tsqr4e1i8VrS0ZFEPw&usqp=CAU",
          }}
          style={{ width: 200, height: 200 }}
        />
      </TouchableOpacity>

      <TextInput
        placeholder="Name your pet!"
        maxLength={20}
        onChangeText={(name) => setName(name)}
        blurOnSubmit={true}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <FeedMeButton />
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
