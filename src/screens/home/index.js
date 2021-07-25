import React from "react"
import Header from "./header"
import BottomNavigation from "../../routes/tab"
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