import React, { useState } from 'react'
import{createBrowserRouter,RouterProvider} from "react-router-dom"
import { Signup } from './Signup'
import {Login }from './Login';
import { Home } from './Home';
import "./stylesheet/App.scss";


export default function App()
 {
  const[user,setUser]=useState();
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home user={user} />
    },
    {
      path:"/login",
      element:<Login setUser={setUser} />
  
    },
    {
      path:"/sign",
      element:<Signup setUser={setUser}/>
    }
  
  ]
  )
  return ( 
    <RouterProvider router={router} />
    
  )
}
