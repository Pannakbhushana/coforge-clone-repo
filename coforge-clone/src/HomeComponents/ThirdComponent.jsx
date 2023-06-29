import React from 'react'
import styles from "./ThirdComponent.module.css";
import { Text } from '@chakra-ui/react';
import {useContext} from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const ThirdComponent = () => {
    const {state}=useContext(ThemeContext);
  return (
    <div className={state ? styles.container:styles.darkContainer} >
        <div className={styles.childOne}>
            <p>AWARDS AND RECOGNITION</p>
            
            <Text className={styles.childOneText}>Today’s milestones. Tomorrow’s <br/> starting line</Text>
        </div>
        <div className={styles.childTwo}>
            <div className={styles.subchildTwo}>
                <img src="https://www.coforge.com/hubfs/GPT2023.png" alt="" />
            </div>
            <div className={styles.subchildTwo}>
                <img src="https://www.coforge.com/hubfs/MostPreferred-Workplace-Logo.jpg" alt="" />
            </div>
            <div className={styles.subchildTwo}>
                <img src="https://www.coforge.com/hubfs/Service%20now.svg" alt="" />
            </div>
            <div className={styles.subchildTwo}>
                <img src="https://www.coforge.com/hubfs/azure-4.png" alt="" />
            </div>
            <div className={styles.subchildTwo}>
                <img src="https://www.coforge.com/hubfs/LFI-Stamp.png" alt="" />
            </div>
           
        </div>
    </div>
   
  )
}

export default ThirdComponent
