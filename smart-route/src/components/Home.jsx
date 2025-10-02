import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const Navigate=useNavigate('')

  const handlegetstarted=()=>{
   window.location.href = "http://127.0.0.1:4001"; 
  }
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/traffichome.jpg"
          alt="traffic"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4 pt-20">
        <h1 className="text-4xl md:text-5xl font-bold font-sans">
          Predict Traffic. Plan Smarter. Travel Faster.
        </h1>
        <p className="text-2xl mt-4 max-w-2xl font-semibold">
          Get real-time traffic insights and congestion forecasts powered by AI.
        </p>

        <button className=' w-32 h-12 bg-blue-500 rounded mt-8 font-bold text-white' onClick={handlegetstarted}> Get Started</button>


        <div className=' flex justify-center bg-gradient-to-r from-blue-250 via-blue-300 to-blue-250 p-8 rounded-xl mt-32'>
        <div className='flex flex-row items-center bg-cover gap-6  '>
          <div className='w-32 h-24'>
            <p className='font-bold text-lg'>
           Best Platform for Smart Route </p></div>
        <img src="/congestionreduce.png" alt=""  className='rounded-3xl w-35 h-35'/>
        <img src="/savetime.png" alt="" className='rounded-3xl w-35 h-35' />
        <img src="/smart route.png" alt="" className='rounded-3xl w-35 h-35'/>
        </div>
      </div>
      </div>
      <footer id="contact"  className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-10">
  <div className="max-w-6xl ml-70 px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <h3 className="text-xl font-bold mb-3">Smart Route</h3>
      <ul className="space-y-2 text-sm text-gray-300">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
        
        <li><a href="/contact" className="hover:underline">Contact</a></li>
      </ul>
    </div>

   
    <div>
      <h3 className="text-xl font-bold mb-3">Contact</h3>
      <ul className="text-sm text-gray-300 space-y-2">
        <li>Email: <a href="mailto:smartroute@domain.com" className="hover:underline">smartroute@domain.com</a></li>
        <li>Phone: +91 98765 43210</li>
        <li>Location: XYZ Engineering College, India</li>
      </ul>
    </div>

  
    <div>
      <h3 className="text-xl font-bold mb-3">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#"><img src="/icons/github.svg" alt="GitHub" className="w-6 h-6 hover:scale-110 transition" /></a>
        <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition" /></a>
        <a href="#"><img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6 hover:scale-110 transition" /></a>
      </div>
    </div>
  </div>

  <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
    &copy; 2025 SmartRoute Team. Built with ❤️.
  </div>
</footer>


      
    </div>
    
  );
};

export default Home;
