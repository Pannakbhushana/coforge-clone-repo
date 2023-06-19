import {createContext, useState} from "react"


export const ThemeContext=createContext();


export const ThemeContextProvider=({children})=>{
    const [state, setState]=useState(true);

    const handleState=()=>{
        setState(!state);
    }
    return <ThemeContext.Provider value={{state, handleState}} >{children}</ThemeContext.Provider>
}