import React, { useState } from 'react'
import PasswordInput from '../Components/PasswordInput';
import { Link } from 'react-router-dom';
import { validatEmail } from '../Utilis/helper'

export default function Signup() {

    const[name,setname]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [error,seterror]=useState('');


    const handlesignup=async(e)=>{
e.preventDefault();

if(!name)
{
    seterror('enter the name');
    return;
}

if(!validatEmail(email))
    {
    
      seterror('enter a valid email')
      return;
    }

    if(!password)
    {
        seterror('enter the password')
        return;
    }
seterror('');

// signup API call


    }
  return (
   
    <div className='flex justify-center items-center mt-28'>
    <div className='w-96 border rounded bg-white px-7 py-10'> 
  <form onSubmit={handlesignup}>

    <h4 className='text-2xl mb-7'>Login</h4>

   {/* // for name */}
    <input type='text' placeholder='name' className='input-box'
    value={name}
    onChange={(e)=>setname(e.target.value)}>
    </input>

    {/* // for email */}
    <input type='text' placeholder='email' className='input-box mt-4'
    value={email}
    onChange={(e)=>setemail(e.target.value)}>
    </input>

   <PasswordInput
   value={password}
   onChange={(e)=>setpassword(e.target.value)}
    />
    {/* // for error */}
{error && <p className='text-red-500  text-xs pb-1 mt-3'>{error}</p>}
         <button type='submit' className='btn-primary'>
            Signup

         
         </button>
         <p className='text-sm text-center mt-5'>Already have account {' '}
            <Link to='/login' className='font-medium text-primary underline'>Login to account</Link>
         </p>


    </form>
    </div>
    </div>
  )
}
