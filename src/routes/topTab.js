import React, {useEffect, useState} from "react"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import MyTabBar from "../components/topNavigation"
import CardVideo from "../components/cardVideo"
import API from "../services/api"


const Tab = createMaterialTopTabNavigator()

export default () => {

  const Tecnologia = () => {
    return (
      <CardVideo categoryVideo="28" />
    );
  }

  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      initialRouteName="AII"
      swipeEnabled={false}>

      <Tab.Screen name="Tecnologia" component={Tecnologia} />
      <Tab.Screen name="Noticias" component={Noticias} />
      <Tab.Screen name="Musicas" component={Musicas} />
      <Tab.Screen name="Todos" component={Todos} />

    </Tab.Navigator>
  )
}

export const Noticias = () => {
  const [data, SetData] = useState([])
  const [page, SetPage] = useState(null)
  const [load, SetLoad] = useState(false)

  useEffect(() => {
    loadApi()
  }, [])

  const loadApi = async () => {
    if (load) return

    SetLoad(true)
    const aiaui = await API.videoCategory(25, page)
    const listVideos = aiaui.items
    SetData([...data, ...listVideos])
    SetPage(aiaui.nextPageToken)
    SetLoad(false)
  }

  return (
    <CardVideo categoryVideo="25" />
  )
}
export const Musicas = () => {
  return (
    <CardVideo categoryVideo="10" />
  )
}
export const Todos = () => {
  return (
    <CardVideo categoryVideo={null} />
  )
}