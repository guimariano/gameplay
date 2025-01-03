import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { Image, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

interface Props {
  urlImage: string;
}

export function Avatar({ urlImage }: Props) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image
        source={{ uri: urlImage }}
        style={styles.avatar}
      />
    </LinearGradient>
  );
}