import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
  CheckBox,
} from "react-native";

import loginBackground from "../../assets/images/login-background.png";

import styles from "./styles";
import ButtonLogin from "../../components/ButtonLogin";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function RememberPassword() {
  const [handleEmailFocus, setHandleEmailFocus] = useState(false)
  const [textTop, setTextTop] = useState('')

  const { navigate } = useNavigation();

  const handleNewAccountPage = () => {
    navigate('CadastroOne')
  }



  return (
    <View style={styles.container}>
      <View style={styles.titleContent}>
        <ImageBackground source={loginBackground} style={styles.imgBackground}>
          <View style={styles.titleView}>
            <Text style={styles.titleLogo}>Proffy</Text>
            <Text style={styles.titleDescription}>
              Sua plataforma de estudos online
            </Text>
          </View>
        </ImageBackground>
      </View>

      <KeyboardAvoidingView style={styles.downContent} behavior="padding">
        <View style={styles.titleLoginContent}>
          <Text style={styles.titleLogin}>Fazer login</Text>
          <TouchableOpacity onPress={handleNewAccountPage}>
          <Text style={styles.loginDescription}>Criar uma conta</Text>
          </TouchableOpacity >
        </View>

        <View>
        <TextInput
        style={[
          styles.input,
          styles.email,
          handleEmailFocus ? styles.emailFocused : {},
        ]}
        placeholder='E-mail'
        returnKeyType='send'
        onChangeText={text => setTextTop(text) }
        onFocus={() => setHandleEmailFocus(true)}
        onEndEditing={() => setHandleEmailFocus(false)}
      />
        </View>

        <View style={styles.optionsLogin}>
          <View style={styles.lembrarMe}>
            <CheckBox value={isSelected} onValueChange={setSelection} />
            <Text style={styles.lembrarMeText}>Lembrar-me</Text>
          </View>

          <Text style={styles.senhaText}>
            Esqueci minha senha
          </Text>
        </View>

        <ButtonLogin title="Entrar" onPressProps={handleSignIn} />
      </KeyboardAvoidingView>
    </View>
  );
}
