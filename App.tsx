import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_400Regular, Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani';
import { AuthProvider } from './src/hooks/auth';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine']);

import { Background } from './src/components/Background';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_400Regular,
    Rajdhani_700Bold,
    Rajdhani_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}