import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native";

import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

import { GuildIcon } from "../GuildIcon";
import { theme } from "../../global/styles/theme";

export type GuildProps = {
  id: string,
  name: string,
  icon: string | null,
  owner: boolean,
}

type Props = TouchableOpacityProps & {
  data: GuildProps;
}

export function Guild({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      style={styles.container}
      activeOpacity={0.7}
    >
      <GuildIcon />
      <View style={styles.content}>
        <Text style={styles.title}>
          {data.name}
        </Text>

        <Text style={styles.type}>
          {data.owner ? 'Administrator' : 'Convidado'}
        </Text>

      </View>

      <Feather
        name="chevron-right"
        color={theme.colors.heading}
        size={24}
      />
    </TouchableOpacity>
  );
}