import React, { useState } from 'react'
import Tagsinput from '../Components/Tagsinput'

function Addeditnotes({arrayOfNotes,setarrayOfNotes}) {

    const [title,settitle]=useState('');
    const [content,setcontent]=useState('');
    const [tags,settags]=useState([]);
    const [error,seterror]=useState(null);

    const addNewNote = () => {
      const newNote = {
        title: title,
        content: content,
        tags: tags,
      };
    
      setarrayOfNotes([...arrayOfNotes, newNote]);
    };
    

    const handleAddNotes=()=>{
      if(!title){
        seterror('please enter the title')
        return;

      }
      if(!content){
        seterror('please enter the content')
        return;

      }
      addNewNote();
      seterror('');
    }

    
  return (
    <div>
        <div className='flex flex-col gap-2'>
            <label className='input-label text-slate-600'>Title</label>
            <input 
            type='text'
            className='text-2xl text-slate-950 outline-none'
            placeholder='Go to gym at 5'
            value={title}
            onChange={(e)=>settitle(e.target.value)}
            >
           
            </input>

        </div>
        
        <div className='flex flex-col gap-2 mt-4'>
        <label className='input-label'>Content</label>
        <textarea
        type='text'
        className='text-sm text text-slate-950 outline-none bg-slate-50 rounded p-3'
        placeholder='content'
        rows={10}
        value={content}
        onChange={(e)=>setcontent(e.target.value)}
       
        >
</textarea>

 </div>

 <div className='mt-3'>
    <label className='input-label '>Tags</label>
    <Tagsinput tags={tags} settags={settags}></Tagsinput>
</div>
{
  error && <p className='text-red-400 text-xs pt-4'>{error}</p>
  
}


 <button className='mt-10 btn-primary font-medium' onClick={handleAddNotes}>ADD</button>

    </div>
  )
}

export default Addeditnotes