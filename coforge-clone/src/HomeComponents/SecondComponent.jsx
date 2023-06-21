import React from 'react'
import styles from "./SecondComponent.module.css";
import { Text } from '@chakra-ui/react';
import {useContext} from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const SecondComponent = () => {
    const {state}=useContext(ThemeContext);

  return (
    <div className={state ? styles.container:styles.darkContainer}>
      
      <div className={styles.childOne}>
        
        <div className={styles.subChildOne}>
            <Text className={styles.subChildOneText}>PURPOSE</Text>
            <Text className={styles.subChildTwoText}>Why we do what we do</Text>
        </div>

        <div className={styles.subChildTwo}>
            <img  src="https://www.coforge.com/hubfs/MicrosoftTeams-image%20(29).png" alt="" 
                  style={{width:"100%",height:"100%",borderRadius:"20px"}} />
        </div>
        
      </div>


      <div className={styles.childTwo}>
            
            <div>
               <h3>Vision</h3>
               <p>Engage with the Emerging</p>
            </div>
            <br />
            <br />
            <div>
                <h3>Mission</h3>
               <p>Transform at the Intersect</p>
            </div>
      </div>
            
    </div>
  )
}

export default SecondComponent
