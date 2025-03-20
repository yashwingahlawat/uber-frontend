import React,{useState} from 'react'
import { Link } from 'react-router-dom'
const CaptainSignup = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [firstname,setFirstname]=useState('')
  const [lastname,setLastname]=useState('')
  const [userData,setUserData]=useState({})
  const submiHandler=(e)=>{
    e.preventDefault()
    setUserData({
      email,password,
      fullname:{firstname,lastname}
    })
    console.log(userData);
    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')
  }
  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
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