import React, { Props, ReactEventHandler } from 'react'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'
import { Text } from 'react-native'

interface ButtonLoginProps {
  title: string
  purple?: boolean
  green?: boolean
  onPressProps: Function
}

const ButtonLogin: React.FC<ButtonLoginProps> = ({title, purple, green, onPressProps}) => {
  return (
    <RectButton 
    onPress={() => onPressProps()}
    style={[styles.button, purple && styles.purple, green && styles.green]}
    >
      <Text 
        style={[styles.textButton, purple && styles.purpleText, green && styles.greenText]}
      >{title}</Text>
    </RectButton>
  )
}

export default ButtonLogin
