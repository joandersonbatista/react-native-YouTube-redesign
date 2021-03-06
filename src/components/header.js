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
const windowHeight = 70;
const pathHeight = 85;

export default () => {
 return (
  <>
   <ART.Surface
    width={windowWidth}
    height={pathHeight}
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
       size={windowHeight / 3}
       color="#808080" />
     </TouchableOpacity>
    </View>
     <Image
      source={require("../assets/images/youtube-l.png.png")}
      style={styles.stretch}/>
   <View style={styles.IconsContainer0}>
     <TouchableOpacity>
      <MaterialCommunity
       name="movie-open-outline"
       size={windowHeight / 3}
       color="#808080"
       style={{ paddingRight: 10 }} />
     </TouchableOpacity>
     <TouchableOpacity>
      <Feather
       name="search"
       size={windowHeight / 3}
       color="#808080" />
     </TouchableOpacity>
    </View>
   </View>
  </>
 )
}

function Path() {
 let path = D3.path()
 path.lineTo(0, pathHeight * 0.70)
 path.quadraticCurveTo(windowWidth / 2, pathHeight, windowWidth, pathHeight * 0.70)
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
  marginTop: pathHeight / 7,
  paddingLeft: 20,
  paddingRight: 20,
  position: "absolute"
 },
 stretch: {
  flex: 1,
  height: windowHeight / 2.4,
  resizeMode: "center",
  margin: "auto",
  marginTop: 1.4
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