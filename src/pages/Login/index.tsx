import React from 'react'
import { View, ImageBackground, Text, Button } from 'react-native'
import { TextInput, RectButton } from 'react-native-gesture-handler'
import { useForm, Controller } from "react-hook-form";
import { Feather } from '@expo/vector-icons';

import loginBackground from '../../assets/images/login-background.png'

import styles from './styles'

type FormData = {
  firstName: string;
  lastName: string;
};

export default function Login() {
  const { control, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = handleSubmit(({ firstName, lastName }) => {
    console.log(firstName, lastName);
  });

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
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={[styles.input, styles.email]}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder='E-mail'
              />
            )}
            name="firstName"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.firstName && <Text>This is required.</Text>}

          <View style={styles.iconPassword}>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={[styles.input, styles.password]}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder='Senha'
                />
              )}
              name="lastName"
              defaultValue=""
            />
          <Feather name="eye" size={24} />
          </View>

          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </View>
  )
}
