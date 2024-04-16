import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='h-16 bg-gray-300 px-3 py-1 items-center w-screen flex'>
            <div className="w-1/2 flex">
                <Link to={'/'} className='text-2xl font-semibold mr-auto my-auto'>Eccommerce</Link>
                <input className='w-80 p-2 rounded-sm' type="text" placeholder='Search Any Products' />
            </div>
            <div className="w-1/3 ml-auto flex justify-between items-center font-semibold">
                <Link to={'/'} >Home</Link>
                <Link to={'/aboutus'} >About</Link>
                <Link to={'/cart'} >Cart</Link>
                <Link to={'/signin'} >Log In</Link>
            </div>
        </div>
    )
}
