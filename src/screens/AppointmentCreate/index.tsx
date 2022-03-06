import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { CategorySelect } from '../../components/CategorySelect';
import { SmallImput } from "../../components/SmallImput";
import { Background } from '../../components/Background';
import { GuildIcon } from '../../components/GuildIcon';
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Guilds } from "../Guilds";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { ModalView } from "../../components/ModalView";
import { GuildProps } from "../../components/Guild";

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelected: GuildProps) {
    setGuild(guildSelected);
    setOpenGuildsModal(false);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <Background>
          <Header
            title="Agendar partida"
          />
          <Text style={[
            styles.label,
            { marginLeft: 24, marginTop: 36, marginBottom: 18, }
          ]}>
            Categoria
          </Text>
          <CategorySelect
            hasCheckbox
            setCategory={setCategory}
            categorySelected={category}
          />
          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {
                  guild.icon
                    ? <GuildIcon />
                    : <View style={styles.image} />
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : 'Selecione um servidor'}
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={styles.label}>Dia e Mês</Text>

                <View style={styles.column}>
                  <SmallImput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallImput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Hora e Minuto</Text>

                <View style={styles.column}>
                  <SmallImput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallImput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>
                Descrição
              </Text>
              <Text style={styles.charactersLimit}>
                Max. 100 caracteres
              </Text>
            </View>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />

            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>

          </View>
        </Background>
      </ScrollView>

      <ModalView
        visible={openGuildsModal}
        closeModal={handleCloseGuilds}
      >
        <Guilds
          handleGuildSelected={handleGuildSelect}
        />
      </ModalView>

    </KeyboardAvoidingView >
  );
}