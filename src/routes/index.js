import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { UserProvider } from "../context/animatedContext"
import Stack from "./stack"

export default () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </UserProvider>
  )
}