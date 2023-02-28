import React, { useState } from 'react'
import "./stylesheet/Signup.scss"
import axios from './api/axios'
import { useNavigate} from "react-router-dom";

export const Signup = (props) => {

  const[username,setUsername]=useState();
  const[useremail,setuseremail]=useState();
  const[usernumber,setusernumber]=useState();
  const[password,setpassword]=useState();
  const[password1,setpassword1]=useState();

  const navigate=useNavigate();

  const HandleSubmit=(e)=>{
    e.preventDefault();
    axios.post("/sign",
    {
      name:username,
      email:useremail,
      number:usernumber,
      password:password
    })
    .then((res)=>
    {
      var t=res.data
      if(t.status)
      {

        console.log(t);
        props.setUser(username)
        navigate("/");
        
      }
      else
      {
        console.log(t)
      }
    })

  }
  return (
    <div className='signup'>
      <div className='signup-container'>
        <form onSubmit={HandleSubmit}>
        <input type="text"
        required
        value={username}
        placeholder="Name"
        onChange={(e)=>{setUsername(e.target.value)}}
        />
        <input type="email"
        placeholder='Email'
        value={useremail}
        onChange={(e)=>{setuseremail(e.target.value)}}
        />
        <input type="text"
        required
        placeholder='Phone Number'
        value={usernumber}
        onChange={(e)=>{setusernumber(e.target.value)}}
        />
        <input type="password"
        required
        placeholder='Password'
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        />
        <input type="password"
        required
        placeholder='Reenter the Password'
        value={password1}
        onChange={(e)=>setpassword1(e.target.value)}
        />
        <input type="submit" />
        </form>
      </div>
    </div>
  )
}
