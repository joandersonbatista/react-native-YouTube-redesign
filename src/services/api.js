import axios from "axios"

const KEY = "AIzaSyDRUkoK3jX6VGQTlOwUpngzq-TjH3S5XWI"
const URL_BASE = "https://www.googleapis.com/youtube/v3/"

export default {

  videoCategory: async (category, page) => {

    try {
      const req = await axios.get(`${URL_BASE}videos`, {
        params: {
          part: "snippet, contentDetails, statistics",
          videoCategoryId: category,
          chart: "mostPopular",
          maxResults: 10,
          pageToken: page,
          regionCode: "BR",
          key: KEY
        }
      })
      return req.data
    } catch (error) {
      console.log("Deu ruim" + error)
    }
  },

  ChannelID: async (id) => {

    try {
      const req = await axios.get(`${URL_BASE}channels`, {
        params: {
          part: "snippet",
          id: id,
          key: KEY
        }
      })
      const [sera] = req.data.items

      return sera.snippet.thumbnails.medium.url
    } catch (error) {
      console.log("Deu ruim" + error)
    }
  },
}