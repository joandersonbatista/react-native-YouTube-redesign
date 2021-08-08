import React, { useState, useEffect } from "react"
import API from "../services/api"
import {
 View,
 FlatList,
 StyleSheet,
 Dimensions,
 Image,
 Text
} from "react-native"

const totalWidth = Dimensions.get("window").width

export default () => {

 const [data, SetData] = useState([])
 const [page, SetPage] = useState(null)
 const [load, SetLoad] = useState(false)

 useEffect(() => {
  loadApi()
 }, [])

 const loadApi = async () => {
  if (load) return

  SetLoad(true)
  const aiaui = await API.videoCategory("20", page)
  const listVideos = aiaui.items
  SetData([...data, ...listVideos])
  SetPage(aiaui.nextPageToken)
  SetLoad(false)
 }

 return (
  <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
   <FlatList
    data={data}
    renderItem={({ item }) => <RenderItem data={item} />}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    onEndReached={loadApi}
    onEndReachedThreshold={0.1}
   />
  </View>
 );
}

const RenderItem = ({ data }) => {
 const [channelLogo, SetLogo] = useState()
 const thumb = data.snippet.thumbnails.medium.url
 const title = data.snippet.title

 useEffect(() => {
  loadLogo()
 }, [])

 const loadLogo = async () => {
  const channelId = data.snippet.channelId
  SetLogo(await API.ChannelID(channelId))
 }

 return (
  <View style={styles.Container}>
   <View style={styles.CardContainer}>
    <Image
     resizeMode="stretch"
     style={{ height: 220 }}
     source={{ uri: thumb }} />
   </View>
   <View style={{flex: 1, marginTop: 10, marginBottom: 5, width: totalWidth - 30, flexDirection: "row"}}>
    <View style={{ height: 50, width: 50, borderRadius: 50, overflow: "hidden" }}>
     <Image
      resizeMode="stretch"
      style={{ height: 50 }}
      source={{ uri: channelLogo }} />
    </View>
    <View style={{ backgroundColor: "blue", paddingLeft: 12, width: totalWidth - 80}}>
     <Text>{title}</Text>
     <Text>okkkkkokkokokok</Text>
    </View>
   </View>
  </View>
 )
}

const styles = StyleSheet.create({
 Container: {
  width: totalWidth,
  marginBottom: 17,
  alignItems: "center",
 },
 CardContainer: {
  width: totalWidth - 30,
  borderRadius: 15,
  overflow: "hidden",
 }
})