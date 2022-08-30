import React, { createContext, useContext, useState } from "react";

const initialState = {
  scrollOffset: 0,
  handleScroll: () => null
}

export const AppStateContext = createContext()

export function GlobalContextProvider(props){

  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = (value) => {
    setOffsetY(value)
  }

  const value = {
    handleScroll,
    scrollOffset: offsetY
  }

  return <AppStateContext.Provider value={value} {...props }/>
}

export function useAppState(){
  const context = useContext(AppStateContext)
  if(!context){
    throw new Error('Context should be called inside of Provider')
  }
  return context
}