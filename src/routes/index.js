import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import Stack from "./stack"
import {View} from "react-native"

export default () => {
 return (
  <NavigationContainer>
   <Stack />
   {/* <View style={{backgroundColor: "blue", height: 100, width: 100, position: "absolute", bottom: 20}}></View> */}
  </NavigationContainer>
 )
}