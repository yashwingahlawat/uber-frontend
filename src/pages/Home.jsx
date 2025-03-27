import React, { useState,useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
const Home = () => {
  const [pickUp,setPickUp]=useState("")
  const [destination,setDestination]=useState("")
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const submitHandler=(e)=>{
    e.preventDefault()
  }
  useGSAP(()=>{
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%',
        padding:'20'
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }
    else{
      gsap.to(panelRef.current,{
        height:'0%',
        padding:'0'
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])
  return (
    <div className='relative h-screen overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png' alt=''/>
      <div className='h-screen w-screen'>
        {/* Image for temporary use */}
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen top-0 absolute w-full'>
        <div className='bg-white h-[30%] p-6 relative'>
          <h5 
          ref={panelCloseRef}
          onClick={e=>setPanelOpen(false)}
          className='absolute right-2 top-3 text-2xl opacity-0'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[47%] bg-gray-900 rounded-full left-10"></div>
            <input
            value={pickUp}
            onClick={e=>setPanelOpen(true)}
            onChange={e=>setPickUp(e.target.value)}
             className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location'/>
            <input
            value={destination}
            onClick={e=>setPanelOpen(true)}
            onChange={e=>setDestination(e.target.value)}
             className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' type="text" placeholder='Enter your Destination'/>
          </form>
        </div>
        <div ref={panelRef} className='bg-white h-0'>
          <LocationSearchPanel/>
        </div>
      </div>
      <div className='w-full fixed z-10 bottom-0 translate-y-full px-3 py-8 bg-white'>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div className='w-full border-2 active:border-black rounded-xl flex items-center justify-between p-3 mb-3'>
          <img className='h-10' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹193.20</h2>
        </div>
        <div className='w-full border-2 active:border-black rounded-xl flex items-center justify-between p-3 mb-3'>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹65.00</h2>
        </div>
        <div className='w-full border-2 active:border-black rounded-xl flex items-center justify-between p-3 mb-3'>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹113.20</h2>
        </div>
      </div>
    </div>
  )
}

export default Home