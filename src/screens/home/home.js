import React from "react"
import Header from "./header"
import {
 View
} from "react-native"
import BottomNavigation from "./BottomNavigation"

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