import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import TabBar from "../components/bottomNavigation"

import EmAlta from "../screens/emAlta"
import Inscricoes from "../screens/inscricoes"
import Inbox from "../screens/inbox"
import Biblioteca from "../screens/biblioteca"
import inicios from "../screens/inicios"
import inicio from "../screens/inicio"

const Tab = createBottomTabNavigator()


export default () => {

 return (
   <Tab.Navigator
    tabBar={props => <TabBar {...props} />}
   >
    <Tab.Screen
     name="home"
     component={inicios}
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