import 'react-native-gesture-handler'

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo'
import { Archivo_400Regular, Archivo_500Medium , Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

import Routes from './src/routes';
import { AuthProvider } from './src/contexts/auth';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        <AuthProvider>
          <Routes />
          <StatusBar style="light" />
        </AuthProvider>
      </NavigationContainer>
    );
  }
}

