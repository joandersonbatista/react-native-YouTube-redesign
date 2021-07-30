import React from "react"
import {Text, View} from "react-native"
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"

const Tab = createMaterialTopTabNavigator()

export default () => {
 return (
  <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
   <Tab.Navigator initialRouteName="AII">
     <Tab.Screen name="AII" component={EmAlta}/>
     <Tab.Screen name="UII" component={Inscricoes}/>
   </Tab.Navigator>
  </View>
 )
}

export const EmAlta = () => {
 return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
   <Text>ALLLL</Text>

  </View>
 )
}
export const Inscricoes = () => {
 return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
   <Text>UIIII</Text>

  </View>
 )
}