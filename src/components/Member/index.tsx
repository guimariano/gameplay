import React from "react";
import { View, Text } from "react-native";
import { theme } from "../../global/styles/theme";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export interface MemberProps {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

interface Props {
  data: MemberProps;
}

export function Member({ data }: Props) {
  const isOnline = data.status === 'online';
  const { on, primary } = theme.colors;

  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url} />
      <View>
        <Text style={styles.title}>
          {data.username}
        </Text>
        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              {
                backgroundColor: isOnline ? on : primary
              }
            ]}
          />
          <Text style={styles.nameStatus}>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </Text>
        </View>
      </View>
    </View>
  );
}