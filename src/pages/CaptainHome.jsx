import React from 'react'
import {Link} from 'react-router-dom'

const CaptainHome = () => {
  return (
    <div className='h-screen'>
        <div>
            <img src="" alt="" />
            <Link to='/home' className='fixed block w-10 h-10 right-2 top-2 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-logout-box-r-line"></i>
            </Link>
        </div>
        <div className='h-1/2'>
            <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        <div className='h-1/2 p-4'>
            <div className='flex items-center justify-between'>
                <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                <div className='text-right'>
                    <h2 className='text-lg font-medium'>Sarthak</h2>
                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>HR10 A 2023</h4>
                    <p className='text-sm text-gray-600'>Maruti Suzuki Swift</p>
                </div>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-gray-600 text-sm -mt-1'>Kankariya Talab, Bhopal</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹193.20</h3>
                            <p className='text-gray-600 text-sm -mt-1'>Cash</p>
                        </div>
                    </div>
                </div>
                {/* <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button> */}
            </div>
            <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
        </div>
    </div>
  )
}

export default CaptainHome