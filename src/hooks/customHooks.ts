import { AppStateContext } from "@context/globalContext"
import { useContext } from "react"

export function useAppState(){
  const context = useContext(AppStateContext)
  if(!context){
    throw new Error('Context should be called inside of Provider')
  }
  return context
}