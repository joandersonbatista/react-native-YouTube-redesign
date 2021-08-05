import React from "react"
import Header from "../components/header"
import BottomNavigation from "../routes/bottomTab"
import {
 View,
 ScrollView,
 Text
} from "react-native"
export default () => {

 return (
  <>
   <View style={{ flex: 1}}>
    <BottomNavigation />
    <Header />
   </View>
  </>
 )
}