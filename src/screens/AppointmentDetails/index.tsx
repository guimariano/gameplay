import React from "react";
import { View } from "react-native";

import { Background } from '../../components/Background';
import { Header } from "../../components/Header";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons"

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function AppointmentDetails() {
  return (
    <Background>
      <View style={styles.container}>
        <Header
          title="Detalhes"
          action={
            <BorderlessButton>
              <Fontisto
                name="share"
                size={24}
                color={theme.colors.primary}
              />
            </BorderlessButton>
          }
        />
      </View>
    </Background>
  );
}