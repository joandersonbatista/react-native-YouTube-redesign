import React, {useEffect} from "react"
import App from "./src/routes/index"
import 'react-native-gesture-handler'
import changeNavigationBarColor from 'react-native-navigation-bar-color'

import { UserProvider } from "./src/context/animatedContext"

export default () => {
  useEffect(() => {
    example()
  },[])
  example = async () => {
    try {
      const response = await changeNavigationBarColor('white', true);
      console.log(response)// {success: true}
    } catch (e) {
      console.log(e)// {success: false}
    }
  };

  return (
    <App />
  )
}