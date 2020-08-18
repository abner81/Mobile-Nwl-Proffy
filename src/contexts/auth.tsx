import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import * as auth from "../services/auth";
import api from "../services/api";
import { Alert } from "react-native";

interface User {
  name: string;
  email: string;
  avatar?: string;
  whatsapp?: string;
  bio?: string;
  id: number;
}

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  user: User | null;
  setTextTopAuth: React.Dispatch<React.SetStateAction<string>>;
  setTextDownAuth: React.Dispatch<React.SetStateAction<string>>;
  textTopAuth: string;
  textDownAuth: string;
  signIn(): Promise<void>;
  signOut(): void;
  createUser(): Promise<void>;
  createUserId: number | null;
  createEmailAndPassword(): Promise<string>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const [createUserId, setCreateUserId] = useState(null);

  const [textTopAuth, setTextTopAuth] = useState("");
  const [textDownAuth, setTextDownAuth] = useState("");

  useEffect(() => {
    const loadStorageData = async () => {
      const storageUser = await AsyncStorage.getItem("auth:user");
      const storageToken = await AsyncStorage.getItem("auth:token");

      if (storageUser && storageToken) {
        api.defaults.headers["Authotization"] = `Bearer ${storageToken}`;
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
    };

    loadStorageData();
    setLoading(false);
  }, []);

  const signIn = async () => {
    const email = textTopAuth;
    const password = textDownAuth;

    setLoading(true);

    try {
      const response = await api.post("generate-token", {
        email: email,
        password: password,
      });

      if (!response.data) {
        throw new Error("Email ou senha incorreta, tente novamente.");
      }
      
      setUser(response.data.user);
      setLoading(false);

      api.defaults.headers["Authotization"] = `Bearer ${response.data.token}`;

      await AsyncStorage.setItem("auth:user", JSON.stringify(response.data.user));
      await AsyncStorage.setItem("auth:token", response.data.token);

    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  };

  const createUser = async () => {
    const name = `${textTopAuth} ${textDownAuth}`;

    try {
      const idInCreateUser = await api.post("create-users", {
        name: name,
      });

      setCreateUserId(idInCreateUser.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const createEmailAndPassword = async () => {
    const email = textTopAuth;
    const password = textDownAuth;
    const user_id = createUserId;

    try {
      const response = await api.post("create-email", {
        email: email,
        password: password,
        user_id: user_id,
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        loading,
        user,
        signIn,
        signOut,
        createUser,
        createEmailAndPassword,
        setTextTopAuth,
        setTextDownAuth,
        textTopAuth,
        textDownAuth,
        createUserId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
