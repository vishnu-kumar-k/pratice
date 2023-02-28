import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Home = (props) => {

  const navigate=useNavigate()

  const handleSubmit=(e)=>{

    e.preventDefault();
    navigate('../login')



  }
  const[count,setCount]=useState(0)
  return (
    <div>
      <h1> welcome, {props.user}</h1>

      <div style={{display:"flex", width :"300px",height:"300px"}}>

        <button onClick={()=>setCount(count+1)}>
          +
        </button>
        <br></br>
        <button onClick={()=>setCount(count-1)}>
          -
        </button>

        <h1>{count}</h1>

        <button onClick={handleSubmit}>
        Procced to Pay
        </button>

      </div>

    </div>
  )
}
