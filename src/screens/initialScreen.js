import React from "react"
import Header from "../components/header"
import BottomNavigation from "../routes/bottomTab"
import {
 View
} from "react-native"
export default () => {

 return (
  <>
   <Header />
   <View style={{ flex: 1 }}>
    <BottomNavigation />
   </View>
  </>
 )
}