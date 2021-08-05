import axios from "axios"

const KEY = "AIzaSyDRUkoK3jX6VGQTlOwUpngzq-TjH3S5XWI"
const URL_BASE = "https://www.googleapis.com/youtube/v3/"

export default {
 
 videoCategory: async (category) => {

  try {
   const req = await axios.get(`${URL_BASE}videos`, {
    params: {
     part: "snippet, contentDetails",
     videoCategoryId: category,
     chart: "mostPopular",
     maxResults: 4,
     key: KEY
    }
   })
   const response = req.data.items
   return response
  } catch (error) {
   console.log("Deu ruim"+ error)
  }
 }

}