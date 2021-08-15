import React, {createContext, useState} from "react"
import {
  Animated
} from "react-native"


const animatedContext = createContext({})


export const UserProvider = props => {
  const [scrollY, SetScrollY] = useState(new Animated.Value(0))
  return (
    <animatedContext.Provider value={{
        scrollY, 
        SetScrollY
    }}>
      {props.children}
    </animatedContext.Provider>
  )
}



export default animatedContext