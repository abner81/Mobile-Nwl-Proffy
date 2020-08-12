import React, { useState, useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'
import api from '../../services/api'
import { useAuth } from '../../contexts/auth'

function Landing() {
  const { navigate } = useNavigation()
  const [totalConnections, setTotalConnections] = useState(0)
  const { signOut, user } = useAuth()

  useEffect(() => {
    api.get('connections').then(res => {
      const { total } = res.data

      setTotalConnections(total)
    })
  }, [])


  const handleNavigateToGiveClassesPage = () => {
   // navigate('GiveClasses')
   signOut()
  }

  const handleNavigateToStudyPages = () => {
    navigate('Study')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
      <Image source={landingImg} style={styles.banner} />
      </View>

      <View style={styles.downContent}>
        <Text style={styles.title} >
          Seja bem-vindo, {'\n'}
          <Text style={styles.titleBold} >O que deseja fazer?</Text>
        </Text>

      <View style={styles.buttonsContainer}>
        <RectButton 
          style={[styles.button, styles.buttonPrimary]} 
          onPress={handleNavigateToStudyPages}
        >
          <Image source={studyIcon}/>
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton 
          onPress={handleNavigateToGiveClassesPage} 
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon}/>
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

        <Text style={styles.totalConnections}>Total de {totalConnections} conexões já realizadas {' '}
          <Image source={heartIcon} />
        </Text>
      </View>
    </View>
  )
}

export default Landing