import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import React, { memo } from 'react'
import Login from "./Components/Login"
import Profile from './Components/Profile'
import Navbar from './Components/Navbar'


function App() {

  return (

    <UserContextProvider>
      <h1>API's</h1>
      <Navbar />
      <Login />
      <Profile />
    </UserContextProvider>



  )
}

export default App
