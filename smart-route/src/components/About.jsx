import React from 'react'

const About = () => {
  return (
    <div className='text-lg text-white bg-gradient-to-r from-black via-gray-800 to-blue-700'>
    <div className=' flex flex-col justify-content  px-4  text-center '>
      <h1 className='text-3xl font-bold '>About Us</h1>
      <h2 className='text-lg font-bold'>Making Roads Smarter and Safer</h2>
      <p className='py-4 px-32'>At Smart Route, we are committed to transforming the way traffic congestion is understood and managed. Our platform leverages real-time traffic imagery, intelligent prediction models, and smart route planning to help commuters, city planners, and emergency services make informed decisions on the go.</p>
      
    </div>
    <div className='flex flex-row gap-12'>
    <div className='px-4 ml-8' >
      <div className='flex flex-row justify-center gap-12 bg-cover p-6'>
      
      <img src="/liveimage.jpg" alt="live"  className='rounded-full w-1/3 object-cover h-50 w-50 hover:opacity-65'/>
      <img src="/aiprediction.jpg" alt="live"  className='rounded-full w-1/3 object-cover h-50 w-50 hover:opacity-75'/>
      <img src="/route.png" alt="live" className='rounded-full w-1/3 object-cover h-50 w-50 hover:opacity-75'/>
      
      
    </div>
    <div className='flex flex-row justify-center gap-16 '>
        <p> Live Traffic Feeds</p>
        <p className='ml-12'>  AI-Powered Predictions</p>
        <p>Optimized Route Suggestions</p>

      </div>
    </div>
    <div >
      <h1 className='text-lg font-bold p-8'>Who It's For</h1>
      <ol>
        <li>Daily commuters looking for the fastest way home</li>
        <li>City traffic management teams for better urban planning</li>
        <li>Anyone who wants to beat the jam!</li>
      </ol>
    </div>
    </div>
    <div className='  flex flex-row p-12'>
      <div className='p-8 text-lg'>
      <h1 className='text-xl font-bold '> Built With Passion</h1>
      
      <p>We are a team of engineering students passionate about solving real-world problems with technology. This project combines our skills in Full Stack Development, Machine Learning, and Geographic Information Systems (GIS) to make a real difference.
Our goal is to address urban traffic challenges by building intelligent, scalable, and user-friendly solutions. By integrating live data analysis and smart routing, we aim to reduce congestion, save time, and improve daily commuting experiences. This project is not just a technical exercise — 
it's a step toward smarter cities and a more connected future.</p>
      </div>
      <img src="/mission.png" alt=""  className='h-75 w-100'/>
    </div>
    </div>
  )
}

export default About
