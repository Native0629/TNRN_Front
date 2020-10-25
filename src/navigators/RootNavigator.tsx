import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import AuthNavigator from './AuthNavigator'
import { NAVIGATORS } from '../constants/navigators'
// import MainNavigator from './MainNavigator'

const Stack = createStackNavigator()

const RootNavigator = () => {
  const isLoggedIn = false

  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      {/* {!isLoggedIn ? ( */}
        <Stack.Screen name={NAVIGATORS.AUTH.name} component={AuthNavigator} />
      {/* ) : (
        <Stack.Screen
          name={NAVIGATORS.AUTHORIZED.name}
          component={MainNavigator}
        />
      )} */}
    </Stack.Navigator>
  )
}

export default RootNavigator
