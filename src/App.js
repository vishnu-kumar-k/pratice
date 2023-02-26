import React from 'react'
import{createBrowserRouter,RouterProvider} from "react-router-dom"
import { Signup } from './Signup'
import {Login} from './Login'
import { Home } from './Home';
import "./stylesheet/App.scss";
const router=createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/login",
    element:<Login />

  },
  {
    path:"/sign",
    element:<Signup />
  }

]
)
export default function App()
 {
  
  return ( 
    <RouterProvider router={router} />
    
  )
}
