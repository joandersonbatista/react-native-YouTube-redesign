import React from "react"
import TopNavigation from "../routes/topTab"
import {
 View,
 ScrollView,
 Text
} from "react-native"
export default () => {

 return (
  <>
   <View style={{ flex: 1 }}>
     <TopNavigation />
   </View>
  </>
 )
}