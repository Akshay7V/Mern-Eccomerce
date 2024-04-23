import React, { useState } from 'react'
import { Link, redirect } from 'react-router-dom'

export default function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await fetch('/api/user/signin', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ email, password })
        });

        if (!res.ok) {
            // Handle non-OK responses
            const errorData = await res.json();
            throw new Error(errorData.message);
        }

        const data = await res.json();
        const { email: mail, id } = data;
        localStorage.setItem('user', JSON.stringify({ email: mail, id }));
        window.location.href = '/'; // Redirect to the '/' route
    } catch (error) {
        console.error('Error:', error.message);
    }
};


  return (
    <div className="w-screen flex justify-center items-center">
      <div className='h-96 w-72 bg-blue-200 flex flex-col gap-2 mt-24 mx-auto rounded-xl p-4'>
        <h2 className='text-2xl font-semibold text-center'>Welcome Back!</h2>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <input className='w-full h-10 p-2 border-2 border-gray-500 rounded-md' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className='w-full h-10 p-2 border-2 border-gray-500 rounded-md' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className='w-full py-2 px-1 bg-black text-white rounded-md' type='submit'>Sign In</button>
        </form>
        <p className='text-center'>Don't have an account? <Link className='font-semibold' to={'/signup'}>Sign Up</Link></p>
      </div>
    </div>
  )
}
