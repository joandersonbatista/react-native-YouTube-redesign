import React from "react"
import Feather from "react-native-vector-icons/Feather"
import Antdesign from "react-native-vector-icons/AntDesign"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {
 Text,
 View,
 Dimensions,
 StyleSheet,
 Animated
} from "react-native"

const Tab = createBottomTabNavigator()
const windowHeight = Dimensions.get('window').height * 0.11;

export default () => {

 const tabOffsetValue = React.useRef(new Animated.Value(0)).current

 return (
  <>
  <Tab.Navigator tabBarOptions={{
   showLabel: false,
   style: {
    position: "absolute",
    bottom: 20,
    marginLeft: 15,
    marginRight: 15,
    height: windowHeight,
    borderRadius: 15,
    zIndex: 0
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
         <Antdesign name="home" size={windowHeight / 3} color={focused ? "red" : "#808080"} />
         <Text style={{ fontSize: 12, color: focused ? "red" : "#808080" }}>Home</Text>
        </View>
       </View>
       {/* {focused ? <View style={{ backgroundColor: "red", height: 4, width: "40%", borderRadius: 15,position: "absolute",alignContent: "flex-end" }} /> : <></>} */}
      </>
     )
    }} listeners={({ navigation, route }) => ({
     // Onpress Update....
     tabPress: e => {
       Animated.spring(tabOffsetValue, {
         toValue: 0,
         useNativeDriver: true
       }).start();
     }
   })}/>
   <Tab.Screen
    name="Alta"
    component={EmAlta}
    options={{
     tabBarIcon: ({ focused }) => (
      <>
       <View style={styles.TabScreen}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
         <Antdesign name="staro" size={windowHeight / 3} color={focused ? "red" : "#808080"} />
         <Text style={{ fontSize: 12, color: focused ? "red" : "#808080" }}>Treding</Text>
        </View>
       </View>
       {/* {focused ? idicator() : <></>} */}
      </>
     )
    }}
    listeners={({ navigation, route }) => ({
     // Onpress Update....
     tabPress: e => {
       Animated.spring(tabOffsetValue, {
         toValue: getWidth(),
         useNativeDriver: true
       }).start();
     }
   })}/>
   <Tab.Screen
    name="Inscrições"
    component={Inscricoes}
    options={{
     tabBarIcon: ({ focused }) => (
      <>
       <View style={styles.TabScreen}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
         <Antdesign name="book" size={windowHeight / 3} color={focused ? "red" : "#808080"} />
         <Text style={{ fontSize: 12, color: focused ? "red" : "#808080" }}>Subscriptions</Text>
        </View>
       </View>
       {/* {focused ? <View style={{ backgroundColor: "red", height: 4, width: "40%", borderRadius: 15,position: "absolute" }} /> : <></>} */}
      </>
     )
    }}
    listeners={({ navigation, route }) => ({
     // Onpress Update....
     tabPress: e => {
       Animated.spring(tabOffsetValue, {
         toValue: getWidth() * 2,
         useNativeDriver: true
       }).start();
     }
   })}/>
   <Tab.Screen
    name="Inbox"
    component={Inbox}
    options={{
     tabBarIcon: ({ focused }) => (
      <>
       <View style={styles.TabScreen}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
         <Antdesign name="inbox" size={windowHeight / 3} color={focused ? "red" : "#808080"} />
         <Text style={{ fontSize: 12, color: focused ? "red" : "#808080" }}>Inbox</Text>
        </View>
       </View>
       {/* {focused ? <View style={{ backgroundColor: "red", height: 4, width: "40%", borderRadius: 15,position: "absolute" }} /> : <></>} */}
      </>
     )
    }}
    listeners={({ navigation, route }) => ({
     // Onpress Update....
     tabPress: e => {
       Animated.spring(tabOffsetValue, {
         toValue: getWidth() * 3,
         useNativeDriver: true
       }).start();
     }
   })}/>
   <Tab.Screen
    name="Livraria"
    component={Library}
    options={{
     tabBarIcon: ({ focused }) => (
      <>
       <View style={[, styles.TabScreen]}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
         <Feather name="folder" size={windowHeight / 3} color={focused ? "red" : "#808080"} />
         <Text style={{ fontSize: 12, color: focused ? "red" : "#808080" }}>Library</Text>
        </View>
       </View>
       {/* {focused ? <View style={{ backgroundColor: "red", height: 4, width: "40%", borderRadius: 15,position: "absolute" }} /> : <></>} */}
      </>
     )
    }}
    listeners={({ navigation, route }) => ({
     // Onpress Update....
     tabPress: e => {
       Animated.spring(tabOffsetValue, {
         toValue: getWidth() * 4,
         useNativeDriver: true
       }).start();
     }
   })}/>
   <View style={{
        width: getWidth() - 20,
        height: 100,
        backgroundColor: 'red',
        position: "absolute",
        bottom: 25,
        // Horizontal Padding = 20...
        left: 50,
        borderRadius: 20,
        zIndex: 10
      }}/>
  </Tab.Navigator>
  <View style={{
        width: getWidth() - 20,
        height: 100,
        backgroundColor: 'red',
        position: "absolute",
        bottom: 25,
        // Horizontal Padding = 20...
        left: 50,
        borderRadius: 20,
        zIndex: 10
      }}/>
  </>
 )
}

function getWidth() {
 let width = Dimensions.get("window").width

 // Horizontal Padding = 20...
 width = width - 80

 // Total five Tabs...
 return width / 5
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
  position: 'absolute',
  alignItems: "center",
  justifyContent: "center",
 }
})

const idicator = () => {
 return (
  <View style={{ justifyContent: "flex-end", alignItems: "flex-end", position: "absolute", height: windowHeight}}>
   <View style={{ backgroundColor: "red", height: 4, width: "40%", borderRadius: 15, }}>
    <Text>OSHII</Text>
   </View>
   
  </View>
 )
}