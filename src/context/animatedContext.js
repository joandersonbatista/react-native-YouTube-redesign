import React, {createContext, useState,useReducer} from "react"


const animatedContext = createContext({})


export const UserProvider = props => {
  const [scrollY, setScrollY] = useState()
  
  const reducer = (state,action) => {
    switch (action.type) {
      case 'increment':
        return setScrollY(action.payload)
      default:
        throw new Error();
    }
    return state
  }
  const [_state, dispath] = useReducer(reducer, scrollY)

  return (
    <animatedContext.Provider value={{
      _state, dispath
    }}>
      {props.children}
    </animatedContext.Provider>
  )
}



export default animatedContext