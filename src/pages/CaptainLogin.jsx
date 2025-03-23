import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
const CaptainLogin = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {captain,setCaptain}=useContext(CaptainDataContext)
  const navigate=useNavigate()
  const submiHandler=async(e)=>{
    e.preventDefault()
    const captainData={email,password}
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captainData)
    if(response.status===200){
      const data=response.data
      localStorage.setItem('token',data.token)
      setCaptain(data.captain)

      navigate('/captain-home')
    }
    // console.log(captainData);
    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
        <form onSubmit={submiHandler}>
          <h3 className='text-xl font-medium mb-2'>What's your email?</h3>
          <input 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
           className='bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base' required type='email' placeholder='email@example.com' />
          <h3 className='text-xl font-medium mb-4'>Enter password</h3>
          <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
           className='bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base' required type='password' placeholder='password' />
          <button  className='bg-black text-white rounded px-4 py-2 mb-3 w-full text-lg font-semibold placeholder:text-base'>Login</button>
          <p className='text-center'>Join a fleet?
            <Link to={'/captain-signup'} className='text-blue-600'>Register as a Captain</Link>
          </p>
        </form>
      </div>
      <div>
        <Link to={'/login'} className='flex items-center justify-center bg-orange-500 text-white rounded px-4 py-2 mb-7 w-full text-lg font-semibold placeholder:text-base'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin