import React from 'react'
import Header from '../components/Header'
import Signin from '../components/Signin'
import Footer from '../components/Footer'

export default function SinginPage() {
  return (
    <div>
      <Header />
      <div className="h-screen w-screen">
        <Signin />
      </div>
      <Footer />
    </div>
  )
}
