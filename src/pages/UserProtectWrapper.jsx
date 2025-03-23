import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'

const UserProtectWrapper = ({children}) => {
    const token=localStorage.getItem('token')
    const navigate=useNavigate()
    // console.log(token);
    const [isLoading,setIsLoading]=useState(true)
    const {user,setUser}=useContext(UserDataContext)
    useEffect(()=>{
        if(!token)navigate('/login')
    },[token])
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then(response=>{
        if(response.status===200){
            setIsLoading(false)
            setUser(response.data.user)
        }
    })
    .catch(err=>{
        localStorage.removeItem('token')
        navigate('/login')
    })
    if(isLoading){
        return <div>Loading...</div>
    }
    return (
        <div>{children}</div>
    )
}

export default UserProtectWrapper