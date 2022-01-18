import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

export function GuildIcon() {
  const uri = 'https://seeklogo.com/images/D/discord-color-logo-E5E6DFEF80-seeklogo.com.png';

  return (
    <Image
      style={styles.image}
      source={{ uri }}
      resizeMode="cover"
    />
  );
}