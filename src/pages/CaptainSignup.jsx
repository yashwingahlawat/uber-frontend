import React,{useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
const CaptainSignup = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [firstname,setFirstname]=useState('')
  const [lastname,setLastname]=useState('')
  const [vehicleColor,setVehicleColor]=useState('')
  const [vehiclePlate,setVehiclePlate]=useState('')
  const [vehicleType,setVehicleType]=useState('')
  const [vehicleCapacity,setVehicleCapacity]=useState('')
  const {captain,setCaptain}=useContext(CaptainDataContext)
  const navigate=useNavigate()
  const submiHandler=async(e)=>{
    e.preventDefault()
    const captainData={
      email,password,
      fullname:{firstname,lastname},
      vehicle:{color:vehicleColor,plate:vehiclePlate,capacity:Number(vehicleCapacity),vehicleType}
    }
    const response=await axios.post('http://localhost:3005/captains/register',captainData)
    console.log(captain,1);
    console.log(response,2);
    
    if(response.status===200){
      const data=response.data
      localStorage.setItem('token',data.token)
      setCaptain(data.captain)
      navigate('/captain-home')
    }
    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleType('')
    setVehicleCapacity('')
  }
  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
        <form onSubmit={submiHandler}>
        <h3 className='text-lg font-medium mb-2'>What's our Captain's name?</h3>
          <div className='flex gap-2'>
          <input 
            value={firstname}
            onChange={(e)=>setFirstname(e.target.value)}
            className='bg-[#eeeeee] rounded px-4 py-2 mb-6 border w-1/2 text-lg placeholder:text-base' 
            required type='text' 
            placeholder='First name' />
            <input 
            value={lastname}
            onChange={(e)=>setLastname(e.target.value)}
            className='bg-[#eeeeee] rounded px-4 py-2 mb-6 border w-1/2 text-lg placeholder:text-base' 
            required type='text' 
            placeholder='Last name' />
          </div>
          <h3 className='text-lg font-medium mb-2'>What's our Captain's email?</h3>
          <input 
           value={email}
            onChange={(e)=>setEmail(e.target.value)}
           className='bg-[#eeeeee] rounded px-4 py-2 mb-6 border w-full text-lg placeholder:text-base' required type='email' placeholder='email@example.com' />
          <h3 className='text-lg font-medium mb-4'>Enter password</h3>
          <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
           className='bg-[#eeeeee] rounded px-4 py-2 mb-6 border w-full text-lg placeholder:text-base' required type='password' placeholder='password' />
          <h2 className='text-xl font-semibold mb-4'>Vehicle Information</h2>
          <div className='flex gap-2 mb-4'>
            <div className='w-1/2'>
              <input 
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                className='bg-[#eeeeee] rounded px-4 py-2 mb-2 border w-full text-lg placeholder:text-base' 
                required 
                type='text' 
                placeholder='Vehicle Color' 
              />
            </div>
            <div className='w-1/2'>
              <input 
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                className='bg-[#eeeeee] rounded px-4 py-2 mb-2 border w-full text-lg placeholder:text-base' 
                required 
                type='text' 
                placeholder='Vehicle Plate' 
              />
            </div>
          </div>
          <div className='flex gap-2 mb-4'>
            <div className='w-1/2'>
              <input 
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                className='bg-[#eeeeee] rounded px-4 py-2 mb-2 border w-full text-lg placeholder:text-base' 
                required 
                type='number' 
                placeholder='Vehicle Capacity' 
              />
            </div>
            <div className='w-1/2'>
              <select 
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className='bg-[#eeeeee] rounded px-4 py-2 mb-2 border w-full text-lg placeholder:text-base' 
                required
              >
                <option value='' disabled>Select Vehicle Type</option>
                <option value='car'>Car</option>
                <option value='auto'>Auto</option>
                <option value='moto'>Moto</option>
              </select>
            </div>
          </div>
          <button className='bg-black text-white rounded px-4 py-2 mb-3 w-full text-lg font-semibold'>Create Captain Account</button>
          <p className='text-center'>Already have an account? 
            <Link to={'/captain-login'} className='text-blue-600'> Login here</Link>
          </p>
        </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply.</span></p>
      </div>
    </div>
  )
}

export default CaptainSignup