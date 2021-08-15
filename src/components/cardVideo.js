import React, { useState, useEffect, useContext } from "react"
import Icon from "react-native-vector-icons/MaterialIcons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Entypo from "react-native-vector-icons/Entypo"
import API from "../services/api"
import animatedContext from "../context/animatedContext"
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  Animated,
  ActivityIndicator
} from "react-native"
import moment from "moment"

const totalWidth = Dimensions.get("window").width

export default ({ categoryVideo }) => {

  const { scrollY, SetScrollY } = useContext(animatedContext)

  const [data, SetData] = useState([])
  const [page, SetPage] = useState(null)
  const [load, SetLoad] = useState(false)

  useEffect(() => {
    loadApi()
  }, [])

  const loadApi = async () => {
    if (load) return

    SetLoad(true)
    const aiaui = await API.videoCategory(categoryVideo, page)
    const listVideos = aiaui.items
    SetData([...data, ...listVideos])
    SetPage(aiaui.nextPageToken)
    SetLoad(false)
  }

  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
      <Animated.FlatList
        data={data}
        renderItem={({ item }) => <RenderItem data={item} />}
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: { y: scrollY }
          },
        }],
          { useNativeDriver: false })}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        onEndReached={loadApi}
        onEndReachedThreshold={0.2}
        ListFooterComponent={<FooterList load={load}/>}
      />
    </View>
  );
}

const RenderItem = ({ data }) => {
  const [channelLogo, SetLogo] = useState()
  const thumb = data.snippet.thumbnails.medium.url
  const videoTitle = data.snippet.title
  const channelTitle = data.snippet.channelTitle
  const videoDuration = data
    .contentDetails
    .duration
    .toString()
    .replace("PT", "")
    .replace("H", "")
    .replace("M", "")
    .replace("S", "")

  const takeTime = () => {

    const Time = moment(data.snippet.publishedAt).fromNow().toString()

    let sera
    if (Time.includes("hours")) {
      sera = `Há ${Time.split("").filter(n => (Number(n) || n == 0)).join("").trim()} Horas`
    }
    if (Time.includes("days")) {
      sera = `Há ${Time.split("").filter(n => (Number(n) || n == 0)).join("").trim()} Dias`
    }
    return sera
  }

  const views = () => {
    const videoViews = data.statistics.viewCount.toString()

    let sera
    if (videoViews.length === 6) {
      sera = `${videoViews.substr(0, 1)}.${videoViews.substr(1, 1)}M`
    }
    if (videoViews.length === 5) {
      sera = `${videoViews.substr(0, 3)}K`
    }
    return sera
  }

  const duration = () => {

    let sera

    if (videoDuration.length === 2) {
      sera = `${videoDuration}`
    }
    if (videoDuration.length === 4) {
      sera = `${videoDuration.substr(0, 2)}:${videoDuration.substr(2, 4)}`
    }
    if (videoDuration.length === 5) {
      sera = `${videoDuration.substr(0, 1)}:${videoDuration.substr(1, 2)}:${videoDuration.substr(3, 5)}`
    }
    return sera
  }

  duration()
  useEffect(() => {
    loadLogo()
  }, [])

  const loadLogo = async () => {
    const channelId = data.snippet.channelId
    SetLogo(await API.ChannelID(channelId))
  }

  function getRandomArbitrary() {
    return Math.random() * (80 - 10) + 10;
  }

  return (
    <View style={styles.Container}>
      <View style={styles.CardContainer}>
        <Image
          resizeMode="stretch"
          style={{ height: 220 }}
          source={{ uri: thumb }} />
        <View style={styles.ViewDuration}>
          <Text style={styles.TextDuration}>{duration()}</Text>
        </View>
        <View style={styles.Optionns}>
          <SimpleLineIcons name="options" color="white" size={20} />
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={{ position: "absolute", bottom: 0, width: "90%", height: 4, backgroundColor: "white", borderRadius: 50, paddingLeft: "10%" }}>
            <View style={{ width: `${getRandomArbitrary()}%`, height: "100%", backgroundColor: "#CF1312", position: "absolute", borderRadius: 50, left: 0 }} />
          </View>
        </View>
      </View>
      <View style={styles.ViewInformation}>
        <View style={styles.Thumbnail}>
          <Image
            resizeMode="stretch"
            style={{ height: 42 }}
            source={{ uri: channelLogo }} />
        </View>
        <View style={styles.DetailsVideo}>
          <Text style={styles.Title} numberOfLines={2}>{videoTitle}</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.ViewChannelTitle}>
              <Icon name="verified" color="#CF1312" size={15} />
              <Text style={styles.TextChannelTitle}>{channelTitle}</Text>
              <Text style={styles.Unicode}>{'\u2B24'}</Text>
              <Text style={styles.Time}>{takeTime()}</Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <View style={styles.Views}>
                <Entypo name="eye" color="#CF1312" size={20} />
                <Text style={styles.TextViews}>{views()}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const FooterList = ({load}) => {
  if (!load) return null

  return (
    <View style={{height: 100,alignItems: "center"}}>
      <ActivityIndicator size={35} color="#808080"/>
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
  },
  Title: {
    fontFamily: "Roboto-Bold",
    fontSize: 13.5,
  },
  Views: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    alignSelf: "flex-end"
  },
  ViewDuration: {
    position: "absolute",
    bottom: 17,
    right: 17,
    backgroundColor: "#3D3D3D",
    borderRadius: 10
  },
  TextDuration: {
    color: "white",
    padding: 2,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 12,
    fontWeight: "600"
  },
  Optionns: {
    position: "absolute",
    right: 30,
    top: 17
  },
  ViewInformation: {
    flex: 1,
    marginTop: 10,
    marginBottom: 5,
    width: totalWidth - 30,
    flexDirection: "row"
  },
  Thumbnail: {
    height: 42,
    width: 42,
    borderRadius: 42,
    overflow: "hidden"
  },
  DetailsVideo: {
    paddingLeft: 12,
    width:
      totalWidth - 80
  },
  ViewChannelTitle: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%"
  },
  TextChannelTitle: {
    opacity: 0.4,
    paddingLeft: 5,
    fontSize: 14.5,
    fontFamily: "Roboto-Medium",
    fontWeight: "600"
  },
  Unicode: {
    fontSize: 7,
    opacity: 0.4,
    paddingLeft: 5,
    paddingRight: 5
  },
  Time: {
    opacity: 0.4,
    fontSize: 14.5,
    fontFamily: "Roboto-Medium",
    fontWeight: "600"
  },
  TextViews: {
    paddingLeft: 5,
    opacity: 0.4,
    fontSize: 14.5,
    fontFamily: "Roboto-Medium",
    fontWeight: "600"
  }
})