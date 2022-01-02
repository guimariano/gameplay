import React, { useState } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import illustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles'

export function SignIn() {
  const [digitacao, setText] = useState('')

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor='transparent'
        barStyle='light-content'
        translucent
      />
      <Image
        source={illustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas Jogatinas{`\n`}
          facilmente {`\n`}
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon
          title="Entre com o Discord"
          activeOpacity={0.7}
        />
      </View>
    </View>
  );
}