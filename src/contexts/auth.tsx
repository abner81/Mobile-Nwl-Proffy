import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import * as auth from "../services/auth";
import api from "../services/api";

interface User {
  name: string
  email: string
}

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  user: User | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStorageData = async () => {
      const storageUser = await AsyncStorage.getItem("auth:user");
      const storageToken = await AsyncStorage.getItem("auth:token");

      if (storageUser && storageToken) {
        api.defaults.headers["Authotization"] = `Bearer ${storageToken}`;
        setUser(JSON.parse(storageUser));
        setLoading(!loading);
      }
    };

    loadStorageData();
  }, []);

  const signIn = async () => {
    const response = await auth.sigIn();
    setUser(response.user);

    api.defaults.headers['Authotization'] = `Bearer ${response.token}`

    await AsyncStorage.setItem("auth:user", JSON.stringify(response.user));
    await AsyncStorage.setItem("auth:token", response.token);
  };

  const signOut = async () => {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider
      value={{ signed: !!user, loading, user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
