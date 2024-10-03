import React from 'react'
import LOGO from '../../images/LOGO.png'
import {  useNavigate } from 'react-router-dom'

export default function HomeNav() {
  const navigate = useNavigate();
  
  const popupLog = () =>{
    navigate('/login')
  }
  return (
    <div className='bg-[#19191A] flex justify-center items-center '>
      <div className='flex items-center justify-between  w-[1280px] px-5'>
        <div>
          <img src={LOGO} alt='logo' className='h-[70px]'></img>
        </div>
        <div className='flex'>
          <div className='pr-3'>
            <button className='h-12 w-[100px] rounded-lg bg-[#FFF600] font-bold
                               hover:bg-[#E5D800] hover:shadow-md 
                               transition-all duration-300 ease-in-out'
                               onClick={popupLog}
                               >
              Login
            </button>
          </div>
          <div>
            <button className='h-12 w-[100px] rounded-lg bg-[#FFF600] font-bold
                               hover:bg-[#E5D800] hover:shadow-md 
                               transition-all duration-300 ease-in-out'>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
