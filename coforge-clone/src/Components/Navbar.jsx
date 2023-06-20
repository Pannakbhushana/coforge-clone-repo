import React from 'react';
import {Link,NavLink} from "react-router-dom";
import styles from "../Styles/Navbar.module.css"
import { Switch } from '@chakra-ui/react';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import SearchModel from './SearchModel';
import HembergetModel from './HembergetModel';
import { DropDownContext } from '../Context/DropDownContext';



const Navbar = () => {
   const {state,handleState}=useContext(ThemeContext);
   const {
    drop1,drop2,drop3,drop4,drop5,drop6,drop7,drop8, 
    handleEnter1, handleLeave1,
    handleEnter2, handleLeave2,
    handleEnter3, handleLeave3,
    handleEnter4, handleLeave4,
    handleEnter5, handleLeave5,
    handleEnter6, handleLeave6,
    handleEnter7, handleLeave7,
    handleEnter8, handleLeave8
  }=useContext(DropDownContext);


    const handleChange=()=>{
      handleState()
    }



  return (
    <div className={ state ? styles.container : styles.darkContainer}>

      <div className={styles.childOne}>
        {state ? <Link to="/" ><img className={styles.image} src="coforge-logo.png" alt="Coforge" /></Link>
         :<Link to="/" ><img className={styles.image} src="dark-coforge-logo.png" alt="Coforge" /></Link>}
      </div>


      <div className={styles.navBar}>

          <div className={styles.childTwo}>

                <div className={styles.navComponent} 
               
               onMouseEnter={()=>{
                  handleEnter1()
                }} 
                onMouseLeave={()=>{
                  handleLeave1()
                }}  >

                   <NavLink  to='/about' > <p className={state ? styles.navText : styles.darkNavText} >About Us</p></NavLink>

                     {drop1 &&  <div className={styles.dropDown}>
                        <p>Board of Directors</p>
                        <p>Executive Team</p>
                        <p>Alliances & Partners</p>
                        <p>Diversity & Inclusion</p>
                        <p>Awards and Accolades</p>
                        <p>Corporate Social Responsibility</p>
                      </div>}
                  </div>


                  <div className={styles.navComponent}  onMouseEnter={()=>{
                  handleEnter2()
                }} 
                onMouseLeave={()=>{
                  handleLeave2()
                }}   >

                   <NavLink  to='/industries' > <p className={state ? styles.navText : styles.darkNavText} >Industries</p></NavLink>

                     {drop2 &&  <div className={styles.dropDown}>
                        <p>Insurance</p>
                        <p>Travel, Transportation & Hospitality</p>
                        <p>Banking and Financial Services</p>
                        <p>Healthcare and Life Sciences</p>
                        <p>Retail & CPG</p>
                        <p>Public Sector</p>
                      </div>}
                  </div>


                  <div className={styles.navComponent}  onMouseEnter={()=>{
                  handleEnter3()
                }} 
                onMouseLeave={()=>{
                  handleLeave3()
                }}   >

                   <NavLink  to='/services' > <p className={state ? styles.navText : styles.darkNavText} >Services</p></NavLink>

                     {drop3 &&  <div className={styles.dropDown}>
                        <p>Digital</p>
                        <p>Data and Analytics</p>
                        <p>Digital Process Automation</p>
                        <p>Salesforce Ecosystem</p>
                        <p>Cloud and Infrastructure <br/> Management Services</p>
                        <p>CyberSecurity Services</p>
                        <p>Business Process Solutions</p>
                        <p>Quality Engineering Services</p>
                        <p>SAP Services</p>
                        <p>Metaverse</p>
                        <p>Cognitive AI</p>
                      </div>}
                  </div>




                  <div className={styles.navComponent}  onMouseEnter={()=>{
                  handleEnter4()
                }} 
                onMouseLeave={()=>{
                  handleLeave4()
                }}   >

                   <NavLink  to='/resources' > <p className={state ? styles.navText : styles.darkNavText} >Resources</p></NavLink>

                     {drop4 &&  <div className={styles.dropDown}>
                        <p>Brochures</p>
                        <p>Case studies</p>
                        <p>White Papers</p>
                        <p>Point of View</p>
                        <p>Data Sheets</p>
                        <p>Analyst Reports</p>
                        <p>Blog</p>
                        <p>Testimonials</p>
                        <p>Videos</p>
                      </div>}
                  </div>
                
                  <div className={styles.navComponent}  onMouseEnter={()=>{
                  handleEnter5()
                }} 
                onMouseLeave={()=>{
                  handleLeave5()
                }}   >

                   <NavLink  to='/investors' > <p className={state ? styles.navText : styles.darkNavText} >Investors</p></NavLink>

                     {/* {drop5 &&  <div className={styles.dropDown}></div>} */}
                  </div>


                  <div className={styles.navComponent}  onMouseEnter={()=>{
                  handleEnter6()
                }} 
                onMouseLeave={()=>{
                  handleLeave6()
                }}   >

                   <NavLink  to='/newsroom' > <p className={state ? styles.navText : styles.darkNavText} >Newsroom</p></NavLink>

                     {/* {drop6 &&  <div className={styles.dropDown}></div>} */}
                  </div>


                  <div className={styles.navComponent}  onMouseEnter={()=>{
                  handleEnter7()
                }} 
                onMouseLeave={()=>{
                  handleLeave7()
                }}   >

                   <NavLink  to='/careers' > <p className={state ? styles.navText : styles.darkNavText} >Careers</p></NavLink>

                     {/* {drop7 &&  <div className={styles.dropDown}></div>} */}
                  </div>


                  <div className={styles.navComponent}  onMouseEnter={()=>{
                  handleEnter8()
                }} 
                onMouseLeave={()=>{
                  handleLeave8()
                }}   >

                   <NavLink  to='/contact' > <p className={state ? styles.navText : styles.darkNavText} >Contact Us</p></NavLink>

                     {/* {drop8 &&  <div className={styles.dropDown}></div>} */}
                  </div>                      

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




