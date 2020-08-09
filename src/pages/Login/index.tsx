import React from 'react'
import { View, ImageBackground, Text, Button } from 'react-native'
import { TextInput, RectButton } from 'react-native-gesture-handler'
import { useForm, Controller } from "react-hook-form";
import { Feather } from '@expo/vector-icons';

import loginBackground from '../../assets/images/login-background.png'

import styles from './styles'

export default function Login() {

  return (
    <View style={styles.container}>
      <View style={styles.titleContent}>
        <ImageBackground source={loginBackground} style={styles.imgBackground}>
          <View style={styles.titleView}>
            <Text style={styles.titleLogo}>Proffy</Text>
            <Text style={styles.titleDescription}>Sua plataforma de estudos online</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.downContent}>
        <View style={styles.titleLoginContent}>
          <Text style={styles.titleLogin}>Fazer login</Text>
          <Text style={styles.loginDescription}>Criar uma conta</Text>
        </View>

        <View style={styles.inputsGroup}>
          <TextInput style={[styles.input, styles.email]} placeholder='E-mail'/>

          <View style={styles.iconPassword}>
            <TextInput style={[styles.password]} placeholder='Senha' secureTextEntry={true} />
            <Feather name="eye" size={24} style={styles.iconRight} />
          </View>
        </View>

        <RectButton style={styles.button}>
          <Text style={styles.textButton}>Entrar</Text>
        </RectButton>
      </View>
    </View>
  )
}
