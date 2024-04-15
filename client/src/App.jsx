import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './components/signin.jsx'
import Signup from './components/signup.jsx'

export default function App() {
  return (
    <div className='h-screen w-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
