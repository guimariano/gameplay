import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

export function GuildIcon() {
  const uri = 'https://i2.paste.pics/bdfc79375c38e34c235aae385ec5076b.png';

  return (
    <Image
      style={styles.image}
      source={{ uri }}
      resizeMode="cover"
    />
  );
}