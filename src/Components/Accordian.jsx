import React, { useState } from 'react'
import { FaPlus,FaMinus } from 'react-icons/fa6'

export default function Accordian(props) {
   const {type}=props;
      const [show,setshow]=useState(false); 
      const toggleDetails=()=>{
           setshow(!show);
      }   
  return (
    <div className='accordian_container'>
          <div className="main-menu">

          <p>{type.question}</p>

          <div className={`btn ${show && "rotate"}`} onClick={toggleDetails}>
         {!show ? <FaPlus/>:<FaMinus/> }
          </div>
        </div>
         {show && <div>
            <p className='ans'>{type.answer}</p>        
          </div>}
          <p>hello</p>
    </div>
  )
}
