import React from "react"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Feather from "react-native-vector-icons/Feather"
import Antdesign from "react-native-vector-icons/AntDesign"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {
 Text,
 View,
 Dimensions,
 StyleSheet
} from "react-native"

const Tab = createBottomTabNavigator()
const windowHeight = Dimensions.get('window').height * 0.147;

export default () => {
 return (
  <Tab.Navigator tabBarOptions={{
   showLabel: false,
   style: {
    position: "absolute",
    bottom: 20,
    marginLeft: 15,
    marginRight: 15,
    height: windowHeight - 27,
    borderRadius: 15
   }
  }}>
   <Tab.Screen
    name="Home"
    component={Home}
    options={{
     tabBarIcon: ({ focused }) => (
      <>
       <View style={styles.TabScreen}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
         <Antdesign name="home" size={windowHeight / 3.9} color={focused ? "red" : "#808080"} />
         <Text style={{ fontSize: 12, color: focused ? "red" : "#808080" }}>Home</Text>
        </View>
       </View>
       {focused ? <View style={{ backgroundColor: "red", height: 4, width: "40%", borderRadius: 15 }} /> : <></>}
      </>
     )
    }} />
   <Tab.Screen
    name="Alta"
    component={EmAlta}
    options={{
     tabBarIcon: ({ focused }) => (
      <>
       <View style={styles.TabScreen}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
         <Antdesign name="staro" size={windowHeight / 3.9} color={focused ? "red" : "#808080"} />
         <Text style={{ fontSize: 12, color: focused ? "red" : "#808080" }}>Treding</Text>
        </View>
       </View>
       {focused ? <View style={{ backgroundColor: "red", height: 4, width: "40%", borderRadius: 15 }} /> : <></>}
      </>
     )
    }}
   />
   <Tab.Screen
    name="Inscrições"
    component={Inscricoes}
    options={{
     tabBarIcon: ({ focused }) => (
      <>
       <View style={styles.TabScreen}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
         <Antdesign name="book" size={windowHeight / 3.9} color={focused ? "red" : "#808080"} />
         <Text style={{ fontSize: 12, color: focused ? "red" : "#808080" }}>Subscriptions</Text>
        </View>
       </View>
       {focused ? <View style={{ backgroundColor: "red", height: 4, width: "40%", borderRadius: 15 }} /> : <></>}
      </>
     )
    }}
   />
   <Tab.Screen
    name="Inbox"
    component={Inbox}
    options={{
     tabBarIcon: ({ focused }) => (
      <>
       <View style={styles.TabScreen}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
         <Antdesign name="inbox" size={windowHeight / 3.9} color={focused ? "red" : "#808080"} />
         <Text style={{ fontSize: 12, color: focused ? "red" : "#808080" }}>Inbox</Text>
        </View>
       </View>
       {focused ? <View style={{ backgroundColor: "red", height: 4, width: "40%", borderRadius: 15 }} /> : <></>}
      </>
     )
    }}
   />
   <Tab.Screen
    name="Livraria"
    component={Library}
    options={{

     tabBarIcon: ({ focused }) => (
      <>
       <View style={[, styles.TabScreen]}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
         <Feather name="folder" size={windowHeight / 3.9} color={focused ? "red" : "#808080"} />
         <Text style={{ fontSize: 12, color: focused ? "red" : "#808080" }}>Library</Text>
        </View>
       </View>
       {focused ? <View style={{ backgroundColor: "red", height: 4, width: "40%", borderRadius: 15 }} /> : <></>}
      </>
     )
    }}
   />
  </Tab.Navigator>
 )
}

const Home = () => {
 return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
   <Text>Home</Text>
   <View style={{ backgroundColor: "red", height: 6, width: "80%", borderRadius: 15 }} >

   </View>
  </View>
 )
}
const EmAlta = () => {
 return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
   <Text>Em Alta</Text>

  </View>
 )
}
const Inscricoes = () => {
 return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
   <Text>Inscrições</Text>

  </View>
 )
}
const Inbox = () => {
 return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
   <Text>Inbox</Text>

  </View>
 )
}
const Library = () => {
 return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
   <Text>Livraria</Text>
  </View>
 )
}

const styles = StyleSheet.create({
 TabScreen: {
  flex: 1,
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: 15
 }
})