import React, { useState } from "react";
import { View, Image, Text, KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { BorderlessButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import icons from "../../assets/images/Seção.png";

import styles from "./styles";
import LoginInput from "../../components/LoginInputs";
import ButtonLogin from "../../components/ButtonLogin";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/auth";

export default function CadastroOne() {
   const {createUser} = useAuth()

  const { navigate } = useNavigation();

  const handleNewAccount02 = () => {
    createUser()
    navigate("CadastroTwo");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BorderlessButton>
          <Ionicons
            style={styles.backIcon}
            name="ios-arrow-round-back"
            size={24}
            color="black"
          />
        </BorderlessButton>
        <View style={styles.bolls}>
          <Image source={icons} />
        </View>
      </View>

      <View style={styles.mainText}>
        <Text style={styles.mainTitle}>Crie sua conta gratuita</Text>
        <Text style={styles.mainDescription}>
          Basta preencher esses dados e você estará conosco.
        </Text>
      </View>

      <KeyboardAvoidingView style={styles.mainLogin} behavior='padding'>
        <Text style={styles.loginTitle}>01. Quem é você?</Text>
        <View style={styles.inputGroup}>
          <LoginInput placeholderTop="Nome" placeholderDown="Sobrenome" />
        </View>
        <ButtonLogin title="Próximo" purple onPressProps={handleNewAccount02} />
      </KeyboardAvoidingView>

      <StatusBar style="dark" />
    </View>
  );
}
