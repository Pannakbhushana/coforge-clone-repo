import React from 'react'
import styles from "./TopMostSection.module.css";
import { Text } from '@chakra-ui/react'

const TopMostSection = () => {
  return (
    <div className={styles.container}>

        <div className={styles.childOne}>
            <Text lineHeight='80px' as='b' fontSize='80px'>Engage with the <br/>emerging</Text>
        </div>

        <div className={styles.childTwo}>

            <Text lineHeight='40px'  fontSize='30px'>Coforge Crosses US$ 1 billion <br/>Revenue Milestone! </Text>
            <Text  fontSize='30px'>Read More →</Text>

        </div>
    </div>
  )
}

export default TopMostSection
