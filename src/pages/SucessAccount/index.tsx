import React from 'react'
import { View, ImageBackground, Text } from 'react-native'

import { Ionicons } from '@expo/vector-icons'; 
import background from '../../assets/images/Backgroundsucess.png'

import styles from './styles'
import ButtonLogin from '../../components/ButtonLogin';
import { useNavigation } from '@react-navigation/native';

export default function SucessAccount() {
  const { navigate } = useNavigation()

  const handleLoginPage = () => {
    navigate('Login')
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={background} 
        resizeMode='contain' 
        style={styles.imgBackground}
      >

        <View style={styles.centerContent}>
          <View style={styles.iconBorder}>
          <Ionicons name="ios-checkmark" size={55} color="#04D361" />
          </View>

          <Text style={styles.textTitle}>Cadastro{'\n'}concluído!</Text>
          <Text style={styles.textDescription}>Agora você faz parte da
plataforma da Proffy</Text>
        </View>

        <View style={styles.button}>
        <ButtonLogin green title='Fazer login' onPressProps={handleLoginPage}/>
        </View>
      </ImageBackground>
    </View>   
  )
}
