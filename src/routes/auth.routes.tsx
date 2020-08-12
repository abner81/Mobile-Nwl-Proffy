import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/Login";
import CadastroOne from "../pages/CadastroOne";
import CadastroTwo from "../pages/CadastroTwo";
import SucessAccount from "../pages/SucessAccount";

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Navigator headerMode="none">
    <Screen name='Login' component={Login} />
  </Navigator>
)

export default AuthRoutes;
