import { ScrollContext } from "@context/scrollContext";
import { useContext } from "react"

function useScrollOffset(){
  const context = useContext(ScrollContext)
  if(!context){
    throw new Error('Context should be called inside of Provider')
  }
  return context
}

export default useScrollOffset;