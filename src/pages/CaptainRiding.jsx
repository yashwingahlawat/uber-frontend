import React from 'react'
import { Link } from 'react-router-dom'

const CaptainRiding = () => {
  return (
    <div className='h-screen'>
      <div className='fixed p-6 flex items-center justify-between w-full'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
        <Link to='/captain-home' className='w-10 h-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-4/5'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative'>
        <h5 className='p-1 text-center absolute top-0 w-[93%]'>
          <i className="text-3xl ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className='text-xl font-semibold'>4 KM away</h4>
        <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
      </div>
    </div>
  )
}

export default CaptainRiding