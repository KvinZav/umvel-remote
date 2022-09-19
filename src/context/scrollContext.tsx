import React, { createContext, useState } from "react";

const initialState = {
  scrollOffset: 0,
  handleScroll: (value : number) => null
}

export const ScrollContext = createContext(initialState)

export function ScrollContextProvider(props){

  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = (value) => {
    setOffsetY(value)
  }

  const value = {
    handleScroll,
    scrollOffset: offsetY
  }

  return <ScrollContext.Provider value={value} {...props }/>
}