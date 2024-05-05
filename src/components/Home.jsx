import React from 'react'
import bg from '../assets/bg.jpg'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()
  return (
    <div className='relative'>
        <img src={bg} className='absolute z-0 h-screen w-full'/>
        <p className='absolute z-1 top-[320px] left-[30%] font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-white text-[5rem]'>Welcome to the<br></br>&nbsp; Blog Website</p>
        <button className='absolute z-1 top-[620px] left-[42%] text-2xl font-semibold cursor-pointer bg-white shadow-lg shadow-slate-400 rounded-full px-8 py-4 hover:text-3xl' onClick={()=>navigate('/blog')}>See blogs</button>
    </div>
  )
}

export default Home