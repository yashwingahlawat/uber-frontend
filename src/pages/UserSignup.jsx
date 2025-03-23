import React,{useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { UserDataContext } from '../context/UserContext'
const UserSignup = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [firstname,setFirstname]=useState('')
  const [lastname,setLastname]=useState('')
  const {user,setUser}=useContext(UserDataContext)
  const navigate=useNavigate()
  const submiHandler=async(e)=>{
    e.preventDefault()
    const newUser={
      fullname:{
        firstname,
        lastname
      },
      email,
      password
    }
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)
    if(response.status===201){
      const data=response.data
      setUser(data.user)
      localStorage.setItem('token',data.token)
      console.log(data);
      navigate('/home')
    }
    // console.log(userData);
    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-14 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
        <form onSubmit={submiHandler}>
          <h3 className='text-lg font-medium mb-2'>What's your name?</h3>
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
          <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
          <input 
           value={email}
            onChange={(e)=>setEmail(e.target.value)}
           className='bg-[#eeeeee] rounded px-4 py-2 mb-6 border w-full text-lg placeholder:text-base' required type='email' placeholder='email@example.com' />
          <h3 className='text-lg font-medium mb-4'>Enter password</h3>
          <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
           className='bg-[#eeeeee] rounded px-4 py-2 mb-6 border w-full text-lg placeholder:text-base' required type='password' placeholder='password' />
          <button  className='bg-black text-white rounded px-4 py-2 mb-3 w-full text-lg font-semibold placeholder:text-sm'>SignUp</button>
          <p className='text-center'>Already have a account? 
            <Link to={'/login'} className='text-blue-600'> Login here</Link>
          </p>
        </form>
      </div>
      <div>
       <p className='text-[10px] leading-tight'>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
      </div>
    </div>
  )
}

export default UserSignup