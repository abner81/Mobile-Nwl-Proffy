import React from 'react'
import { View, ImageBackground, Image, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

import secaoIcons from '../../assets/images/Seção2.png'
import studyIcon from '../../assets/images/icons/study.png'
import backgroundTop from '../../assets/images/Backgroundwelcome-background.png'

import styles from './styles'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

export default function WelcomeTwo() {
  const { navigate } = useNavigation ()
  const handleNextPage = () => {
    navigate('Login')
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <View>
      <ImageBackground source={backgroundTop} resizeMode='contain' style={styles.imgBackground}>
        <Image source={studyIcon} style={styles.imgBook}/>
      </ImageBackground>
        </View>
      </View>

      <View style={styles.footerStyle}>
        <View style={styles.footerText}>
          <Text style={styles.textNumber}>02.</Text>
          <Text style={styles.textInfo}>Ou dê aulas sobre o que você mais conhece</Text>
        </View>

        <View style={styles.footerIcons}>
          <Image source={secaoIcons}/>
          <BorderlessButton onPress={handleNextPage}>
          <Ionicons 
            name="ios-arrow-round-back" 
            size={60} 
            color="#9C98A6" 
            style={styles.NextIcon}
          />
          </BorderlessButton>
        </View>
      </View>
    </View>
  )
}
