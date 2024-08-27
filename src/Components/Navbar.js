import {React, useState }from 'react'
import Profileinfo from './Profileinfo'
import { useNavigate} from 'react-router-dom'
import Searchbar from './Searchbar';

function Navbar() {
    const [searchquery,setsearchquery]=useState('');


    const handleclear=()=>{
        setsearchquery('');

    }

    const navigate = useNavigate();
     const logout=()=>{
 
    navigate('/login');
}

  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
        <h2 className='text-xl font-medium  text-black py-2'>Notes</h2>

        <Searchbar value={searchquery} onChnage={(e)=>setsearchquery(e.target.value)} handleclear={handleclear}></Searchbar>
     <Profileinfo  logout={logout} ></Profileinfo>
      
    </div>
  )
}

export default Navbar
