import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, ImageBackground, Text, KeyboardAvoidingView, CheckBox, Image } from 'react-native'

import loginBackground from '../../assets/images/login-background.png'

import styles from './styles'
import ButtonLogin from '../../components/ButtonLogin'
import LoginInput from '../../components/LoginInputs'

export default function Login() {
  

  const [isSelected, setSelection] = useState(false);

  const { navigate } = useNavigation()

  const navigateNewAccount = () => {
    navigate('CadastroOne')
  }

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

      <KeyboardAvoidingView style={styles.downContent} behavior="padding">
        <View style={styles.titleLoginContent}>
          <Text style={styles.titleLogin}>Fazer login</Text>
          <Text 
            style={styles.loginDescription}
            onPress={navigateNewAccount}>Criar uma conta</Text>
        </View>

        <LoginInput 
          placeholderTop='E-mail' 
          placeholderDown='Senha' 
          password={true}
        />

        <View style={styles.optionsLogin}>
          <View style={styles.lembrarMe}>
            <CheckBox 
              value={isSelected}
              onValueChange={setSelection}
              />
            <Text style={styles.lembrarMeText}>Lembrar-me</Text>
          </View>

          <Text style={styles.senhaText} onPress={() => console.log('weueueu')}>Esqueci minha senha</Text>
        </View>

        <ButtonLogin title='Entrar' />
      </KeyboardAvoidingView>
    </View>
  )
}
