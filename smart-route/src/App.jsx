import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contacts from './components/Contacts'
import About from './components/About'

import Map from './components/Map';







function App() {
 

  return (
   
     <Router>
        <Navbar/>
        <Routes>
          
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        
        
          <Route path="/map" element={<Map />} />
          
            
        
        </Routes>
     
     </Router>
   
  )
}

export default App
