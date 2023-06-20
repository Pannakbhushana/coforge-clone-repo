import {createContext, useState} from "react"


export const DropDownContext=createContext();


export const DropDownContextProvider=({children})=>{
    const [drop1, setDrop1]=useState(false);
    const [drop2, setDrop2]=useState(false);
    const [drop3, setDrop3]=useState(false);
    const [drop4, setDrop4]=useState(false);
    const [drop5, setDrop5]=useState(false);
    const [drop6, setDrop6]=useState(false);
    const [drop7, setDrop7]=useState(false);
    const [drop8, setDrop8]=useState(false);

   const handleEnter1=()=>{
    setDrop1(true);
   }

   const handleLeave1=()=>{
    setDrop1(false);
   }


   const handleEnter2=()=>{
    setDrop2(true);
   }

   const handleLeave2=()=>{
    setDrop2(false);
   }


   const handleEnter3=()=>{
    setDrop3(true);
   }

   const handleLeave3=()=>{
    setDrop3(false);
   }



   const handleEnter4=()=>{
    setDrop4(true);
   }

   const handleLeave4=()=>{
    setDrop4(false);
   }



   const handleEnter5=()=>{
    setDrop5(true);
   }

   const handleLeave5=()=>{
    setDrop5(false);
   }



   const handleEnter6=()=>{
    setDrop6(true);
   }

   const handleLeave6=()=>{
    setDrop6(false);
   }



   const handleEnter7=()=>{
    setDrop7(true);
   }

   const handleLeave7=()=>{
    setDrop7(false);
   }



   const handleEnter8=()=>{
    setDrop8(true);
   }

   const handleLeave8=()=>{
    setDrop8(false);
   }

    return <DropDownContext.Provider value={{drop1,
                                            drop2,
                                            drop3,
                                            drop4,
                                            drop5,
                                            drop6,
                                            drop7,
                                            drop8, 
                                            handleEnter1, handleLeave1,
                                            handleEnter2, handleLeave2,
                                            handleEnter3, handleLeave3,
                                            handleEnter4, handleLeave4,
                                            handleEnter5, handleLeave5,
                                            handleEnter6, handleLeave6,
                                            handleEnter7, handleLeave7,
                                            handleEnter8, handleLeave8
                                        
                                        
                                        
                                        }} >{children}</DropDownContext.Provider>
}