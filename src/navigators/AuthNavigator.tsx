import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NAVIGATORS } from '../constants/navigators'
import LoginScreen from '../features/auth/Login'
import RegisterScreen from '../features/auth/Register'
import WelcomeScreen from '../features/auth/Welcome'
import ForgotPasswordScreen from '../features/auth/ForgotPassword'
import MainNavigator from './mainNavigator/MainNavigator'

const Stack = createStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATORS.WELCOME.name}
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={NAVIGATORS.LOGIN.name} component={LoginScreen} options={{ headerShown: true }} />
      <Stack.Screen
        name={NAVIGATORS.REGISTER.name}
        component={RegisterScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name={NAVIGATORS.FORGOT_PASSWORD.name}
        component={ForgotPasswordScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name={NAVIGATORS.MAIN.name}
        component={MainNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator
