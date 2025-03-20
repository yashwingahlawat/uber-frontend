// Home.js
import React from 'react'

const Home = () => {
  return (
    <div className='bg-cover bg-[url(https://images.unsplash.com/photo-1538563188159-070c4db2bc65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
      <img className='w-14 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png
      " alt="" />
      <div className='bg-white px-4 py-4 pb-7'>
        <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
        <button className='w-full py-3 bg-black rounded text-white mt-5'>Continue</button>
      </div>
    </div>
  )
}

export default Home;
