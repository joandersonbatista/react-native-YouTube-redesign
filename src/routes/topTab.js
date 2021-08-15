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

   <Tab.Screen name="Tecnologia" component={Tecnologia} />
   <Tab.Screen name="Noticias" component={Noticias} />
   <Tab.Screen name="Musicas" component={Musicas} />
   <Tab.Screen name="Todos" component={Todos} />

  </Tab.Navigator>
 )
}

export const Tecnologia = () => {
 return (
  <CardVideo categoryVideo="28"/>
 );
}
export const Noticias = () => {
 return (
  <CardVideo categoryVideo="25"/>
 )
}
export const Musicas = () => {
 return (
  <CardVideo categoryVideo="10"/>
 )
}
export const Todos = () => {
 return (
  <CardVideo categoryVideo={null}/>
 )
}