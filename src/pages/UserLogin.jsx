import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
const UserLogin = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {user,setUser}=useContext(UserDataContext)
  const navigate=useNavigate()
  const submiHandler=async(e)=>{
    e.preventDefault()
    const userData={
      email,
      password
    }
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)
    console.log(response);
    if(response.status===200){
      const data=response.data
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')
    }
    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-14 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
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
          <p className='text-center'>New Here?
            <Link to={'/signup'} className='text-blue-600'>Create an Account</Link>
          </p>
        </form>
      </div>
      <div>
        <Link to={'/captain-login'} className='flex items-center justify-center bg-lime-500 text-white rounded px-4 py-2 mb-7 w-full text-lg font-semibold placeholder:text-base'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin