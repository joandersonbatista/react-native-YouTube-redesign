import React from "react"
import Header from "../components/header"
import BottomNavigation from "../routes/bottomTab"
import {
 SafeAreaView,
 StatusBar
} from "react-native"
export default () => {

 return (
  <>
   <SafeAreaView style={{ flex: 1}}>
   <StatusBar backgroundColor="white" barStyle="dark-content"/>
    <BottomNavigation />
    <Header />
   </SafeAreaView>
  </>
 )
}