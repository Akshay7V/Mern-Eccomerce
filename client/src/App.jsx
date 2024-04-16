import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SinginPage from './pages/SinginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'

export default function App() {
  return (
    <div className='overflow-x-hidden'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<SignupPage/>} />
          <Route path='/signin' element={<SinginPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
