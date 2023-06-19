import React from 'react';
import {Route,Routes} from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Careers from '../Pages/Careers';
import Contact from '../Pages/Contact';
import Industries from '../Pages/Industries';
import Investors from '../Pages/Investors';
import Newsroom from '../Pages/Newsroom';
import Resources from '../Pages/Resources';
import Services from '../Pages/Services';


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>}  />
        <Route path='/careers' element={<Careers/>}  />
        <Route path='/contact' element={<Contact/>}  />
        <Route path='/industries' element={<Industries/>}  />
        <Route path='/investors' element={<Investors/>}  />
        <Route path='/newsroom' element={<Newsroom/>}  />
        <Route path='/resources' element={<Resources/>}  />
        <Route path='/services' element={<Services/>}  />
    
      </Routes>
    </div>
  )
}

export default AllRoutes
