import React, { useState, useEffect } from "react"
import API from "../services/api"
import {
 View,
 FlatList,
 StyleSheet,
 Dimensions,
 Image
} from "react-native"

const totalWidth = Dimensions.get("window").width

export default () => {

 const [data, SetData] = useState([])

 useEffect(() => {
  loadApi()
 }, [])

 const loadApi = async () => {
  SetData(await API.videoCategory("28"))
 }
 
 const renderItem = ({item}) => (
  <>
   <View style={styles.Container}>
    <View style={styles.Container}>
     <Image resizeMode="cover" style={{height: "100%"}} source={{uri: "https://i.ytimg.com/vi/AO-Gwd2adlM/mqdefault.jpg"}}/>
    </View>
   </View>
  </>
 );
 return (
  <View style={{ flex: 1, alignItems: "center" }}>
   <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
   />
  </View>
 );
}

const styles = StyleSheet.create({
 Container: {
  backgroundColor: "blue",
  height: 180,
  width: 320,
  marginBottom: 5
 }
})