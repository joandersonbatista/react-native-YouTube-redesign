import React from "react"
import * as D3 from "d3"
import * as ART from "@react-native-community/art"
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons"
import {
 Dimensions,
 View,
 StyleSheet,
 Image,
 TouchableOpacity
} from "react-native"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height * 0.147;

export default () => {
 return (
  <>
   <ART.Surface
    width={windowWidth}
    height={windowHeight}
    style={styles.Path}
    >
    <ART.Shape
     d={Path()}
     fill="white"
     shadowColor="black"
     shadowOpacity={0.3}
     shadowRadius={15} />
   </ART.Surface>
   <View style={styles.AppBar}>
    <View style={styles.IconsContainer1}>
     <TouchableOpacity>
      <AntDesign
       name="menu-unfold"
       size={windowHeight / 4}
       color="#808080" />
     </TouchableOpacity>
    </View>
     <Image
      source={require("../assets/youtube-l.png.png")}
      style={styles.stretch}/>
   <View style={styles.IconsContainer0}>
     <TouchableOpacity>
      <MaterialCommunity
       name="movie-open-outline"
       size={windowHeight / 4}
       color="#808080"
       style={{ paddingRight: 10 }} />
     </TouchableOpacity>
     <TouchableOpacity>
      <Feather
       name="search"
       size={windowHeight / 4}
       color="#808080" />
     </TouchableOpacity>
    </View>
   </View>
  </>
 )
}

function Path() {
 let path = D3.path()
 path.lineTo(0, windowHeight * 0.70)
 path.quadraticCurveTo(windowWidth / 2, windowHeight, windowWidth, windowHeight * 0.70)
 path.lineTo(windowWidth, 0)

 return path.toString()
}

const styles = StyleSheet.create({
 Path: {
  position: "absolute",
 },
 AppBar: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  alignSelf: "baseline",
  width: windowWidth,
  height: windowHeight / 1.8,
  marginTop: windowHeight / 5,
  paddingLeft: 20,
  paddingRight: 20,
  position: "absolute"
 },
 stretch: {
  flex: 1,
  height: windowHeight / 3,
  resizeMode: "center",
  margin: "auto",
  marginTop: 1.7
 },
 IconsContainer0: {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  alignContent: "flex-end"
 },
 IconsContainer1: {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  alignContent: "flex-end"
 },
})