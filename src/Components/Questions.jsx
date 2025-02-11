import React from 'react'
import Accordian from './Accordian'

export default function Questions(props){
  return (
   <div className='box text '>
           <div className='question-container'>
       <h2>Interview Questions</h2>
      <div className='accordian-container'>
      {
       props.item.map(data=>{
          return  <Accordian key={data.id} type={data}/>
       })   
      }
      </div>
      
    </div>
   </div>
  )
}
