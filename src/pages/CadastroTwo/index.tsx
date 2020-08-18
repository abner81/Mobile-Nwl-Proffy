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
import { useAuth } from '../../contexts/auth';

export default function CadastroTwo() {
  const {createEmailAndPassword} = useAuth()
  const { navigate } = useNavigation()

  const handleNewAccountSucess = async () => {
    try {
      const response = await createEmailAndPassword();

      if (response !== "Sucess")
        throw new Error(
          "Não foi possível concluir o cadastro, tente novamente mais tarde."
        );

      navigate('SucessAccount')
    } catch (error) {
      console.log(error);
    }
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
