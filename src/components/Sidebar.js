import React from 'react'
import logo from "../assets/logo.png"
import settings from "../assets/settings.png"


const Sidebar = () => {
  return (
    <div className='min-h-screen min-w-fit flex flex-col justify-between bg-[#020027] py-8 px-8'>
     <div className='flex flex-col gap-20'>
     <img src={logo} alt="logo" />
     <div className='flex flex-col text-xl font-medium gap-4'>
        <div className='text-white'>Dashboad</div>
        <div className='text-[#A8A8A8]'>Books</div>
     </div>
     </div>
     <div className='text-white'>
     <img src={settings} alt="settings" />
     </div>
    </div>
  )
}

export default Sidebar