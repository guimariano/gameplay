import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import illustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';
import { Background } from '../../components/Background';
import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/styles/theme';

export function SignIn() {
  const { user, signIn, loading } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(String(error));
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={illustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize suas {'\n'}
            jogatinas {'\n'}
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>
          {
            loading
              ? <ActivityIndicator color={theme.colors.primary} />
              :
              <ButtonIcon
                title="Entre com o Discord"
                activeOpacity={0.3}
                onPress={handleSignIn}
              />
          }
        </View>
      </View>
    </Background>
  );
}