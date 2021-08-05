import React from "react"
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import MyTabBar from "../components/topNavigation"
import CardVideo from "../components/cardVideo"


const Tab = createMaterialTopTabNavigator()

export default () => {
 return (
  <Tab.Navigator 
  tabBar={props => <MyTabBar {...props} />} 
  initialRouteName="AII" 
  swipeEnabled={false}>

   <Tab.Screen name="Tecnologia" component={EmAlta} />
   <Tab.Screen name="Noticias" component={Inscricoes} />
   <Tab.Screen name="Musica" component={AAA} />
   <Tab.Screen name="Todos" component={BB} />

  </Tab.Navigator>
 )
}

export const EmAlta = () => {
 return (
  <CardVideo />
 );
}
export const Inscricoes = () => {
 return (
  <></>
 )
}
export const AAA = () => {
 return (
  <></>
 )
}
export const BB = () => {
 return (
  <></>
 )
}