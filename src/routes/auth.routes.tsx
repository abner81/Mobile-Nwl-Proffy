import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/Login";
import WelcomeOne from '../pages/WelcomeOne'
import WelcomeTwo from "../pages/WelcomeTwo";
import CadastroOne from "../pages/CadastroOne";
import CadastroTwo from "../pages/CadastroTwo";
import SucessAccount from "../pages/SucessAccount";
import RememberPassword from "../pages/RememberPassword";

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Navigator headerMode="none">
      <Screen name="WelcomeOne" component={WelcomeOne} />
      <Screen name="WelcomeTwo" component={WelcomeTwo} />
      <Screen name="Login" component={Login} />
      <Screen name="CadastroOne" component={CadastroOne} />
      <Screen name="CadastroTwo" component={CadastroTwo} />
      <Screen name="RememberPassword" component={RememberPassword} />
      <Screen name="SucessAccount" component={SucessAccount} />
    </Navigator>
);

export default AuthRoutes;
