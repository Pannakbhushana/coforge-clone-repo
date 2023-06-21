import React from 'react'
import styles from "./TopMostSection.module.css";
import { Text } from '@chakra-ui/react';
import {useContext} from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const TopMostSection = () => {
  const {state}=useContext(ThemeContext);
  
  return (
    <div className={styles.container}>

        <div className={styles.childOne}>
            <Text className={styles.childOneText}>Engage with the emerging</Text>
        </div>

        <div className={state ? styles.childTwo : styles.darkChildTwo}>

            <Text className={styles.childTwoText}>Coforge Crosses US$ 1 billion <br/>Revenue Milestone! </Text>
            
            <Text className={styles.childTwoText} >Read More →</Text>

        </div>
    </div>
  )
}

export default TopMostSection
