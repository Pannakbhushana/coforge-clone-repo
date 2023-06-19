import React from 'react';
import {NavLink,Link} from "react-router-dom";
import styles from "../Styles/Navbar.module.css"
import { Switch } from '@chakra-ui/react';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import SearchModel from './SearchModel';
import { HamburgerIcon } from '@chakra-ui/icons';
import HembergetModel from './HembergetModel';
import {link} from "../Utils/navComponents"
import { DropDownContext } from '../Context/DropDownContext';



const Navbar = () => {
   const {state,handleState}=useContext(ThemeContext);
   const {drop,handleEnter, handleLeave}=useContext(DropDownContext);

    const handleChange=()=>{
      handleState()
    }

    const handleHoverEnter=()=>{
      handleEnter()
    }

    const handleHoverLeve=()=>{
      handleLeave()
    }







  return (
    <div className={ state ? styles.container : styles.darkContainer}>

      <div className={styles.childOne}>
        {state ? <Link to="/" ><img className={styles.image} src="coforge-logo.png" alt="Coforge" /></Link>
         :<Link to="/" ><img className={styles.image} src="dark-coforge-logo.png" alt="Coforge" /></Link>}
      </div>






      <div className={styles.navBar}>
          <div className={styles.childTwo}>
            {link.map((el,i)=>{

              return <NavLink onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeve}
                        key={i} to={el.url}
                        className={styles.defaults}
            >{el.name}</NavLink>
          })}
          </div>
      </div>




      <div className={styles.childThird}>
        <div style={{cursor:"pointer", color: state ? "white" : "yellow"}} >
              <SearchModel/>
            </div>

            <div  style={{width:"200px"}} >

              <div className={styles.hembargur}>
                <HembergetModel/>
              </div>
            </div>
            
            <div>
                <Switch size='lg' colorScheme='yellow' onChange={handleChange} />
            </div>
      </div>

    </div>
  )
}

export default Navbar




