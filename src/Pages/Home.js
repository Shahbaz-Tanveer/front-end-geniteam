import React, { useState,useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Notecard from '../Components/Notecard'
import { MdAdd } from 'react-icons/md'
import Addeditnotes from './Addeditnotes'
import Modal from 'react-modal'
// import { useNavigate } from 'react-router-dom' // for future



function Home() {

  const [open, setOpen] = React.useState(false);
  const [arrayOfNotes, setarrayOfNotes] = useState([
    {
      title: 'meeting in karachi',
      date: '2nd April',
      content: 'meeting is urgent for the company',
      tags: '#Meeting',
      ispinned: true
    }
  ]);
  
  // const [userInfo,setuserInfo]=useState(''); // for future
  // const navigate=useNavigate(); // for 
  



  // for All notes
//   const [allNotes,setallNotes]=useState([]);

//   const getAllNotes=async()=>{
//     try {
// const response=await axiosInstance.get('/get-all-notes')
// if(response.data && response.data.notes)
// {
//   setallNotes(response.data.notes)
// }

//     } catch (error) {
//       console.log('unexpected error has come');
      
//     }

//   }


const handleClose = () => {
  setOpen(false);
};

const handleOpen = () => {
  setOpen(true);
};

//// Get user-info/////

// const getUserInfo=async()=>{
//   try {
//     const Response=axiosInstance.get('/get-user')
//     if(Response.data && Response.data.user)
//       setuserInfo(Response.data.user);
    
//   } catch (error) {
//     if(error.response.status===401)
//     {
//       localStorage.clear();
//       navigate('/login')
//     }
    
//   }
 
// };

// useEffect(() => {
//   getUserInfo();

//   return () => {
    
//   }
// }, [])




  return (
    <div>
      <Navbar />
      <div className='container mx-auto'> 
      <div className='grid grid-cols-3 mt-6 gap-4 ml-5 mr-5'>
        
      {arrayOfNotes.map((note) => (<Notecard title={note.title} date={note.date} content={note.content} tags={note.tags} ispinned={note.ispinned} />))}

        </div>
        </div>
        <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10'>

<MdAdd className='text-[32px] text-white' onClick={handleOpen}></MdAdd>
</button>
<div
            style={{
                textAlign: "center",
                display: "block",
                padding: 30,
                margin: "auto",
              
            }}
        >
            
            <Modal isOpen={open} onRequestClose={handleClose} className='w-[40%] max-h-3/4 bg-white border-spacing-0 mx-auto rounded-md mt-[42px] p-5 border  shadow-sm '>
                <>
                <Addeditnotes arrayOfNotes={arrayOfNotes} setarrayOfNotes={setarrayOfNotes}></Addeditnotes>
                </>
            </Modal>
        </div>




      
    </div>
  )
}

export default Home
