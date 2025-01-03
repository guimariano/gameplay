import React from "react";
import { Text, View } from "react-native";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function Profile() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Avatar
        urlImage={user.avatar}
      />
      <View>
        <View style={styles.user}>
          <Text style={styles.greetings}>
            Olá,
          </Text>
          <Text style={styles.username}>
            {user.firstname}
          </Text>
        </View>
        <View>
          <Text style={styles.message}>
            Hoje é dia de vitória
          </Text>
        </View>
      </View>
    </View>
  );
}