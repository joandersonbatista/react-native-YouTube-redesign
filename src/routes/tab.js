import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import TabBar, {
 Home,
 EmAlta,
 Inscricoes,
 Inbox,
 Library
} from "../screens/home/BottomNavigation"

const Tab = createBottomTabNavigator()


export default () => {

 return (
   <Tab.Navigator
    tabBar={props => <TabBar {...props} />}
   >
    <Tab.Screen
     name="home"
     component={Home}
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
     component={Library}
    />
   </Tab.Navigator>
 )
}