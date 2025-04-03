import React from 'react'
import { val } from '../constants/UserImage'

const RidePopUp = ({ setRidePopUpPanel, setConfirmRidePopUpPanel }) => {
    return (
        <div>
            <h5
                onClick={() => {
                    setRidePopUpPanel(false)
                }}
                className='p-1 text-center absolute top-0 w-[93%]'>
                <i className="text-3xl ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>
            <div className='flex items-center justify-between mb-3 mt-3 bg-gray-100 p-3 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src={val} alt="" />
                    <h2 className='text-lg font-medium'>Leo Messi</h2>
                </div>
                <h5 className='text-lg font-semibold'>3.3 KM</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-gray-600 text-sm -mt-1'>Kankariya Talab, Bhopal</p>
                        </div>
                    </div>
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
                <div className='flex items-center justify-between w-full'>

                    <button
                        onClick={() => {
                            setRidePopUpPanel(false)
                        }}
                        className='mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg'>Ignore</button>
                    <button
                        onClick={() => {
                            setConfirmRidePopUpPanel(true)
                            setRidePopUpPanel(false)
                        }}
                        className='mt-5 bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Accept</button>
                </div>

            </div>
        </div>
    )
}

export default RidePopUp