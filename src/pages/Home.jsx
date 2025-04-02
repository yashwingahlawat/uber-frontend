import React, { useState,useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../context/VehiclePanel'
import ConfirmRide from '../context/ConfirmRide'
import LookingForDriver from '../context/LookingForDriver'
import WaitingForDriver from '../context/WaitingForDriver'
const Home = () => {
  const [pickUp,setPickUp]=useState("")
  const [destination,setDestination]=useState("")
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const [confirmRidePanel, setConfirmRidePanel] = useState(null)
  const [waitingForDriver, setWaitingForDriver] = useState(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
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
  useGSAP(()=>{
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanelOpen])
  useGSAP(()=>{
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePanel])
  useGSAP(()=>{
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehicleFound])
  useGSAP(()=>{
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[waitingForDriver])
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
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen}/>
        </div>
      </div>
      <div ref={vehiclePanelRef} className='w-full fixed z-10 bottom-0 translate-y-full pt-12 px-3 py-10 bg-white'>
        <VehiclePanel setVehiclePanelOpen={setVehiclePanelOpen} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>
      <div ref={confirmRidePanelRef} className='w-full fixed z-10 bottom-0 translate-y-full pt-12 px-3 py-6 bg-white'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={vehicleFoundRef} className='w-full fixed z-10 bottom-0 translate-y-full pt-12 px-3 py-6 bg-white'>
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={waitingForDriverRef} className='w-full translate-y-full fixed z-10 bottom-0 pt-12 px-3 py-6 bg-white'>
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>
    </div>
  )
}

export default Home