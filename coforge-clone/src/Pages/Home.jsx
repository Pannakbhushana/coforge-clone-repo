import React from 'react'
import styles from "../Styles/Home.module.css";
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';



const Home = () => {
  const {state}=useContext(ThemeContext);

  return (
    <>
      <div className={state ? styles.container : styles.darkContainer} >

          <div className={styles.childOne}>
            {state ? <img className={styles.image} src="banner.png" alt="" />
            :<img className={styles.image} src="dark-banner.png" alt="" />}
          </div>

          <div className={state ? styles.childTwo : styles.darkChildTwo}>
            <p>join the celebration</p>
          </div>
      </div>
      <div>
      </div>
    </>
  )
}

export default Home
