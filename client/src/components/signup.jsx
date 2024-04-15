import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='h-96 w-72 bg-blue-200 flex flex-col gap-2 mt-24 mx-auto rounded-xl p-4'>
      <h2 className='text-2xl font-semibold text-center'>Create Your Account</h2>
      <input className='w-full h-10 p-2 border-2 border-gray-500 rounded-md' type="email" placeholder='Email'/>
      <input className='w-full h-10 p-2 border-2 border-gray-500 rounded-md' type="password" placeholder='Password'/>
      <button className='w-full py-2 px-1 bg-black text-white rounded-md' type='submit'>Sign Up</button>
      <p className='text-center'>Already have an account? <Link className='font-semibold' to={'/signin'}>Sign In</Link></p>
    </div>
  )
}
