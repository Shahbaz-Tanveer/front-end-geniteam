import React from 'react'
import { getinitials } from '../Utilis/helper'

const Profileinfo=({logout})=> {
  return (
    <div className='flex items-center gap-3'>
        <div className='w-12 h-12  justify-center p-3  rounded-full text-slate-950 font-medium bg-slate-100 '>
        {getinitials('shahbaz gill')}
         </div>

    <div> 
        <p className='text-sm font-medium'>Shahbaz Gill</p>
        <button className='text-sm bg-slate-100 underline' onClick={logout}>Logout</button>
      
    </div>
    </div>
  )
}

export default Profileinfo
