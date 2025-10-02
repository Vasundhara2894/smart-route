import React from 'react'
import Home from './Home.jsx'
// import {Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';




const Navbar = () => {
  return (
    <header className='flex justify-between items-center p-4 bg-black h-15'>
        <div className='flex items-center'>
            <img src="/logo1.webp" alt="logo"  className='w-15 h-15 ml-15 p-2'/>
            <span className='text-white font-bold text-lg font-mono '> Smart Route</span>
            
        </div>
     
        <nav className='mr-24'>
            <ul className='flex items-center gap-24 ml-12'>
             
              <li><Link to='/' className='text-white font-bold text-lg hover:text-blue-400 transition-colors duration-300'> Home</Link></li> 
              <li> <Link to='/about' className='text-white font-bold text-lg hover:text-blue-400 transition-colors duration-300'>About</Link></li>
               <li><Link to="/#contact" smooth className="text-white font-bold text-lg hover:text-blue-400 transition-colors duration-300"> Contact</Link></li>     
               {/* <li><Link to='/map'className='text-white font-bold text-lg hover:text-blue-400 transition-colors duration-300'>Map</Link></li> */}
               
            </ul>
            
        </nav>
        
    </header>
  )
}

export default Navbar
 