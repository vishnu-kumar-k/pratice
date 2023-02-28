import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from './api/axios'

export const Login = (props) => {
  const[number,setNumber]=useState();
  const[password,setPassword]=useState();
  const navigate=useNavigate();
  const HandleChange=(e)=>
  {
    e.preventDefault();
    axios.post("/login",{
      number:number,
      password:password
    }).then((res)=>
    {
      if(res.data.status)
      {
        props.setUser(res.data.q[0].name);
        navigate("/success");
        console.log("Login Successfull  "+JSON.stringify(res.data.q[0].name))
      }
      else
      {
       console.log(res.data); 
      }
    }).catch((err)=>{
      console.log(err);
    }
    )

  }
  return (
    <>
    <form onSubmit={HandleChange}>
      <input type="text"
      placeholder='Enter the Number'
      value={number}
      onChange={(e)=>setNumber(e.target.value)}
      />
      <input type="password"
      placeholder='Enter the Password'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <input type='submit'/>
    </form>
    </>
  )
}
