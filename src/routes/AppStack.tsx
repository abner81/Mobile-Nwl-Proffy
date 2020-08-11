import React from 'react'
import { NavigationContainer }from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing'
import GiveClasses from '../pages/GiveClasses'
import StudyTabs from './StudyTabs'
import Login from '../pages/Login'
import CadastroOne from '../pages/CadastroOne'
import CadastroTwo from '../pages/CadastroTwo'
import SucessAccount from '../pages/SucessAccount'

const { Navigator, Screen } = createStackNavigator()

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false,}}>
        <Screen name='Landing' component={Landing}/>
        <Screen name='CadastroTwo' component={CadastroTwo}/>
        <Screen name='SucessAccount' component={SucessAccount}/>
        <Screen name='Login' component={Login}/>
        <Screen name='CadastroOne' component={CadastroOne}/>
        <Screen name='GiveClasses' component={GiveClasses}/>
        <Screen name='Study' component={StudyTabs}/>
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack