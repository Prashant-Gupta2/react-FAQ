import React, { useState } from 'react'
import { ToastContainer , toast,Bounce } from 'react-toastify';
import Users from './Users';

export default function Form() {
     const [formData,setformData]=useState({
      fullname:'',
      email:'',
      pass:'',
      connfpass:''    
     }) 
    const [error,seterror]=useState(''); 
    const [users,setusers]=useState([]);
    
    function handleChange(e){
     const {name,value}=e.target;
     setformData((prevData)=>({
       ...prevData,[name]:value   
     }))
    }
    const submitHandler=(e)=>{
          e.preventDefault();
      if(formData.pass.length<6){
       seterror('password must be 6 characters long');
       return;   
      } 
      if(formData.pass !==formData.connfpass){
       seterror('Password and confirm passowrd must be same');   
       return;
      }
      if(!/[!@#$%^&*(),."]/.test(formData.pass)){
       seterror('password must contain any special chars');
       return; 
      }
      if(/![A-Z]/.test(formData.pass)){
       seterror('passoword must contain 1 upper case ');
       return;    
      }
      setusers((prevData)=>[
        ...prevData,{
         fullname:formData.fullname,
         email:formData.email,
         pass:formData.pass,
         confirm:formData.connfpass 
        }     
      ])
      
      seterror('');
      setformData({
          fullname:'',
          email:'',
          pass:'',
          connfpass:''     
      })

      toast.success('Login Succesfull!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });   
    }      
  return (
          <div className="h-screen flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-96 shadow-lg">
            <form onSubmit={(e)=>submitHandler(e)} className="flex flex-col items-center gap-4">
              <div className="w-full">
                <label className="text-gray-600 text-lg font-medium mb-2" htmlFor="name">Name</label>
                <input onChange={handleChange}
                  value={formData.fullname}
                  name='fullname'
                  id="name"
                  className="border border-gray-300 px-3 py-2 text-xl rounded w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="w-full">
                <label className="text-gray-600 text-lg font-medium mb-2" htmlFor="email">Email</label>
                <input onChange={handleChange}
                 value={formData.email}
                 name='email'
                  id="email"
                  className="border border-gray-300 px-3 py-2 text-xl rounded w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="w-full">
                <label className="text-gray-600 text-lg font-medium mb-2" htmlFor="password">Password</label>
                <input onChange={handleChange}
                value={formData.pass}
                name='pass'
                  id="password"
                  className="border border-gray-300 px-3 py-2 text-xl rounded w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
        
              <div className="w-full">
                <label className="text-gray-600 text-lg font-medium mb-2" htmlFor="confirm-password">Confirm Password</label>
                <input onChange={handleChange}
                 value={formData.connfpass}
                 name='connfpass'
                  id="confirm-password"
                  className="border border-gray-300 px-3 py-2 text-xl rounded w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  type="password"
                  placeholder="Confirm your password"
                />
              </div>
              {error && (<p className=' text-red-600 font-semibold text-center'>{error}</p>)}
              <button className="text-xl text-white px-4 py-2 rounded bg-emerald-600 font-semibold mt-5 w-full hover:bg-emerald-700 transition duration-200">
                Submit
              </button>
            </form>
             <ToastContainer>

             </ToastContainer> 
          </div>
          {users.map((data,index)=>{
            return <Users key={index} data={data.fullname}/>       
          })}
        </div>        
  )
}
