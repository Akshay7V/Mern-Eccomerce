import React from 'react'
import Header from '../components/Header'
import Signup from '../components/signup'
import Footer from '../components/Footer'

export default function SinginPage() {
  return (
    <div>
      <Header />
      <div className="h-screen w-screen">
        <Signup />
      </div>
      <Footer />
    </div>
  )
}
