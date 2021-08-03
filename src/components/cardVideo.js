import React, {useState, useEffect} from "react"
import API from "../services/api"
import {
 View,
 FlatList,
 StyleSheet,
 Text,
 SafeAreaView
} from "react-native"

export default () => {

 const [data, SetData] = useState([])

 const renderItem = ({ item }) => (
  <Text>{item.id}</Text>
 );
 
useEffect( async () => {
 SetData(await API.videoCategory("28"))
},[])

console.log("conseguimosrrr" + data)
 return (
  <SafeAreaView>
   <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id}
   />
  </SafeAreaView>
 );
}

const renderItem = ({data}) => {
 return (
  <View>
   <Text>{data.id}</Text>
  </View>
 )
}

const styles = StyleSheet.create({
 Container: {
  flex: 1
 }
})