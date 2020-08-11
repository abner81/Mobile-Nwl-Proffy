import React, { useState } from 'react'

import styles from './style'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons';

interface LoginInputProps {
  placeholderTop: string
  placeholderDown: string
  password?: boolean
}

const LoginInput: React.FC<LoginInputProps> = ({ placeholderTop, placeholderDown, password }) => {
  const [handleEmailFocus, setHandleEmailFocus] = useState(false)
  const [handlePasswordFocus, setHandlePasswordFocus] = useState(false)
  const [passwordVisibleToggle, setPasswordVisibleToggle] = useState(false)

  const [textTop, setTextTop] = useState('')
  const [textDown, setTextDown] = useState('')

  console.log(textDown);
  

  return (
    <View style={styles.inputsGroup}>
      <TextInput
        style={[
          styles.input,
          styles.email,
          handleEmailFocus ? styles.emailFocused : {},
        ]}
        placeholder={placeholderTop}
        returnKeyType='next'
        onChangeText={text => setTextTop(text) }
        onFocus={() => setHandleEmailFocus(true)}
        onEndEditing={() => setHandleEmailFocus(false)}
      />

      <View style={[styles.iconPassword, handlePasswordFocus ? styles.focused : {},]}>
        <TextInput
          style={[styles.password,]}
          placeholder={placeholderDown}
          secureTextEntry={passwordVisibleToggle}
          onChangeText={text => setTextDown(text)}
          returnKeyType='send'
          onFocus={() => setHandlePasswordFocus(true)}
          onEndEditing={() => setHandlePasswordFocus(false)}
        />

        {password && (
          passwordVisibleToggle && (
            <Feather
              name='eye'
              size={24}
              style={[styles.iconRight, handlePasswordFocus ? styles.Iconfocused : {}]}
              onPress={() => setPasswordVisibleToggle(!passwordVisibleToggle)}
            />
          )
        )}

        {password && (
          passwordVisibleToggle || (
            <Feather
              name='eye-off'
              size={24}
              style={[styles.iconRight, handlePasswordFocus ? styles.Iconfocused : {}]}
              onPress={() => setPasswordVisibleToggle(!passwordVisibleToggle)}
            />
          )
        )}
        
      </View>
    </View>
  )
}

export default LoginInput