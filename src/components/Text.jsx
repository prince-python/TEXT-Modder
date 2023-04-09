import React from 'react'
import { useState } from 'react'
export const Text = (props) => {
    let [text,Settext]=useState("enter text")


    const typing=(event)=>{
       Settext(event.target.value);
    };


    const capital=()=>{
        let newtext=text.toUpperCase();
        Settext(newtext)

    }
    const LOWER=()=>{
        let newtext=text.toLowerCase();
        Settext(newtext)
    }

    const clear=()=>{
        let newtext="";
        Settext(newtext)
    }
   const copy=()=>
   {
      var text=document.getElementById("area");
      text.select();
      navigator.clipboard.writeText(text.value)

   }
    
    
    return (
    <> 
    <div className='bg-white border border-black p-4 mt-5  shadow-lg rounded-4'>
    <center><h3 className='text-black shadow-lg rounded-4'>{ props.title }</h3></center>
    <div className='container-fluid shadow-lg bg-white rounded-4 p-3 '>
    <textarea className='form-control mt-5 mb-3 col-4 rounded-4 row-4 shadow-lg  bg-white text-black' row="20" col="40" id='area' onChange={ typing } value={ text } ></textarea>
    <button className='btn btn-primary' onClick={ capital }>CLICK TO CAPITALIZE</button>
    <button className=' m-3 btn btn-primary ' onClick={ LOWER }>CLICK TO LOWERCASE</button>
    <button className=' m-3 btn btn-primary hover' onClick={ clear }>CLICK TO CLEAR</button>
    <button className=' m-3 btn btn-primary hover' onClick={ copy }>CLICK TO COPY TEXT</button>
    <h4 className='text-black rounded-4 shadow-lg'>Total Character are { text.length }</h4>
    <h4 className='text-black rounded-4 shadow-lg'>Total words are { text.split(" ").length-1 }</h4>

    </div>
    </div>
    <center>
        <footer>
            <div class="mt-5 p-5 ">
                <a href="https://github.com/prince-python " class="btn btn-primary text-white">DEVLOPED BY PRINCE</a>
            </div>
        </footer>
    </center>
    </>
  )
}



