import {createContext, useState} from "react"


export const DropDownContext=createContext();


export const DropDownContextProvider=({children})=>{
    const [drop, setDrop]=useState(false);

   const handleEnter=()=>{
    setDrop(true);
   }

   const handleLeave=()=>{
    setDrop(false);
   }

    return <DropDownContext.Provider value={{drop, handleEnter, handleLeave}} >{children}</DropDownContext.Provider>
}