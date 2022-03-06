import React from "react";
import { View, FlatList } from "react-native";

import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

interface Props {
  handleGuildSelected: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelected }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '2',
      name: 'Galera do Game',
      icon: 'image.png',
      owner: false,
    },
    {
      id: '3',
      name: 'Lendários',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '4',
      name: 'Galera do Game',
      icon: 'image.png',
      owner: false,
    },
    {
      id: '5',
      name: 'Lendários',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '6',
      name: 'Galera do Game',
      icon: 'image.png',
      owner: false,
    }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        renderItem={({ item }) => (
          <Guild
            data={item}
            onPress={() => handleGuildSelected(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <ListDivider isCentered />}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.guilds}
      />
    </View>
  );
}