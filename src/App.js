import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import ResetPass from './Components/ResetPass'

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-pass' element={<ResetPass/>} />
        <Route path='*' element={<Navigate to='/dashboard' />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App