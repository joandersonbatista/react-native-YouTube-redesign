import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import TabBar from "../screens/home/bottomNavigation"

import Inicio from "../screens/home/inicio"
import EmAlta from "../screens/home/emAlta"
import Inscricoes from "../screens/home/inscricoes"
import Inbox from "../screens/home/inbox"
import Biblioteca from "../screens/home/biblioteca"

const Tab = createBottomTabNavigator()


export default () => {

 return (
   <Tab.Navigator
    tabBar={props => <TabBar {...props} />}
   >
    <Tab.Screen
     name="home"
     component={Inicio}
    />
    <Tab.Screen
     name="staro"
     component={EmAlta}
    />
    <Tab.Screen
     name="book"
     component={Inscricoes}
    />
    <Tab.Screen
     name="inbox"
     component={Inbox}
    />
    <Tab.Screen
     name="folder"
     component={Biblioteca}
    />
   </Tab.Navigator>
 )
}