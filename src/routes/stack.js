import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import home from "../screens/initialScreen"

const Stack = createStackNavigator()

export default () => {
 return (
  <Stack.Navigator>
   <Stack.Screen
    name="Home"
    component={home}
    options={{ headerShown: false }}
   />
  </Stack.Navigator>
 )
}