import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import PasswordInput from '../Components/PasswordInput'
import { validatEmail } from '../Utilis/helper'
import axiosInstance from '../Utilis/axiosInstance'

function Login() {
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('');
  const [error,seterror]=useState('');
  const navigate=useNavigate();

  const handlelogin=async(e)=>{
    e.preventDefault();
    if(!validatEmail(email))
    {
    
      seterror('enter a valid email')
      return;
    }

    if(!password)
    {
      seterror('please enter a valid password')
      return;
    }
    seterror('');
    

    //API  call for my future code

    // try {
    //   const response=await axiosInstance.post('/login',{
    //     email:email,
    //     password:password
    // });

    // //handle successful login response
    // if(response.data && response.data.accessToken)
    // {
    //   localStorage.setItem('Token',response.data.accessToken);
    //   navigate('/')
    // }
      
    // } catch (error) {
    //   if(error.response && error.response.data && error.response.data.message)
    //   {
    //     seterror(error.response.data.message)
    //   }
    //   else{
    //     seterror('unexpected error');
    //   }
      
    // }




  }

  return (
    <div className='flex justify-center items-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'> 
      <form onSubmit={handlelogin}>

        <h4 className='text-2xl mb-7'>Login</h4>

        <input type='text' placeholder='email' className='input-box'
        value={email}
        onChange={(e)=>setemail(e.target.value)}>
        </input>

        <PasswordInput value={password} onChange={(e)=>setpassword(e.target.value)}></PasswordInput>

{error && <p className='text-red-500  text-xs pb-1 mt-3'>{error}</p>}
         <button type='submit' className='btn-primary'>
            Login

         
         </button>
         <p className='text-sm text-center mt-5'>Not register yet? {' '}
            <Link to='/signup' className='font-medium text-primary underline'>Create new account</Link>
         </p>
      </form>
    </div>
    </div>
  )
}

export default Login
