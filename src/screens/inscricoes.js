import React, { useEffect, useState } from "react"
import {
  View,
  StyleSheet,
  Image,
  Dimensions
} from "react-native"

import CardVideo from "../components/cardVideo"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const widith = Dimensions.get("window").width - 30

export default () => {
  const channelsLogo = [

    "https://yt3.ggpht.com/ytc/AKedOLQzFP8g7r--TU1bpBzvekT8toot94vd2DwCO3kj=s240-c-k-c0x00ffffff-no-rj",

    "https://yt3.ggpht.com/ytc/AKedOLQHQJ1HjPrwm5xowTODfKPWBDJaddgQU9Cq9dL-=s88-c-k-c0x00ffffff-no-rj",

    "https://yt3.ggpht.com/ytc/AKedOLTmg5zbLqqpxWqxUnY_XrmoZs5m6LSj4CTNiL4OBg=s88-c-k-c0x00ffffff-no-rj",

    "https://yt3.ggpht.com/ytc/AKedOLRzBy_UmMEqMhxCI7prKUD968xLptU93UHbeTMYvA=s88-c-k-c0x00ffffff-no-rj"

  ]

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={styles.ChannelsContainer}>
        {channelsLogo.map((logo, index) => {
          return (
            <View key={index}>
              <View style={styles.Thumbnail}>
                <Image
                  resizeMode="stretch"
                  style={{ height: 65 }}
                  source={{ uri: logo }} />
              </View>
              <View style={styles.NewVideo}>
                <View style={styles.Video} />
              </View>
            </View>
          )
        })}
        <View style={styles.All}>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={27}
            color="white" />
        </View>
      </View>
      <CardVideo categoryVideo="20" />
    </View>
  )
}

const styles = StyleSheet.create({
  Thumbnail: {
    height: 65,
    width: 65,
    borderRadius: 65,
    overflow: "hidden"
  },
  ChannelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 85,
    width: widith
  },
  All: {
    height: 65,
    width: 65,
    borderRadius: 65,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  NewVideo: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 14,
    height: 14,
    width: 14,
    bottom: 15,
    right: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  Video: {
    backgroundColor: "red",
    borderRadius: 10,
    height: 10, width: 10
  }
})