import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  
  return (
    <UserContextProvider>
    <h1>React With Mayank</h1>
    <br />
    <Login/>
    <br />
    <br />
    <div className='border border-white-700'>
      <Profile/>
    </div>
    </UserContextProvider>
  )
}

export default App
