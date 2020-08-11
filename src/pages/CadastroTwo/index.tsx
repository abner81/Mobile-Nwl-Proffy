import React from 'react'
import { View, Image, Text, KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'; 

import icons from '../../assets/images/Seção2.png'

import styles from './styles'
import LoginInput from '../../components/LoginInputs';
import ButtonLogin from '../../components/ButtonLogin';
import { useNavigation } from '@react-navigation/native';

export default function CadastroTwo() {
  const { navigate } = useNavigation()

  const handleNewAccountSucess = () => {
    navigate('SucessAccount')
  }

  const handleGoBack = () => {
    navigate('CadastroOne')
  }

  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <BorderlessButton onPress={handleGoBack}>
          <Ionicons style={styles.backIcon} name="ios-arrow-round-back" size={24} color="black" />
        </BorderlessButton>
        <View style={styles.bolls}>
          <Image source={icons}/>
        </View>
      </View>

      <KeyboardAvoidingView style={styles.mainLogin} >
        <Text style={styles.loginTitle}>
          02. Email e Senha
        </Text>
        <View style={styles.inputGroup}>
          <LoginInput placeholderTop='E-mail' placeholderDown='Senha' password/>
        </View>
        <ButtonLogin title='Próximo' green onPressProps={handleNewAccountSucess}/>
      </KeyboardAvoidingView>

      <StatusBar style='dark'/> 
    </View>
  )
}
