// Home.js
import React from 'react'

const Home = () => {
  return (
    <div className='h-screen flex justify-between flex-col w-full bg-red-400'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png
      " alt="" />
      <div className='bg-white'>
        <h2>Get Started with Uber</h2>
        <button>Continue</button>
      </div>
    </div>
  )
}

export default Home;
