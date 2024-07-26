import React from 'react'

import {Routes,Route} from 'react-router-dom'



import AOS from "aos"
import "aos/dist/aos.css";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import HeroBottom from './components/Hero/HeroBottom';
import Footer from './components/Footer/Footer';
import About from './components/About/About'
import Contact from './components/Contact';


const App = () => {
  React.useEffect(()=>{
    AOS.init({
        duration:700,
        easing:"ease-in-sine",
        offset:100,
      });

  },[]);
  return (<>
  <div className="overFlow-hidden"> 
    <Navbar/>
    <Hero/>
 
  {/* <HeroBottom/> */}
   
  <Routes>
     <Route path ='/About' element={<About/>} />
      <Route path='/contact'  element={<Contact/>}/>
      {/* <Route path='service'  element={<
        Service/>} */}
     
    </Routes>  
    <Footer/> 
  
  </div>
  </>
    
    
  )
};

export default App