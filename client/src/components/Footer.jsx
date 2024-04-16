import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="absolute bottom-0 h-60 w-screen p-5 bg-slate-400">
            <div className="flex">
                <Link className='text-2xl my-auto font-semibold' to={'/'}>Eccomerce</Link>
                <div className="mx-auto w-3/4 grid grid-cols-3 grid-rows-4 gap-2 font-semibold">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/'}>Orders</Link>
                    <Link to={'/'}>Track Orders</Link>
                    <Link to={'/'}>Cart</Link>
                    <Link to={'/'}>Sign In</Link>
                    <Link to={'/'}>Sign Up</Link>
                    <Link to={'/'}>Profile</Link>
                    <Link to={'/'}>Settings</Link>
                    <Link to={'/'}>Customer Care</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <p className='font-semibold mx-auto'>Subscribe To Our Mail</p>
                    <input className='p-2 rounded-md' type="email" placeholder='abc@mail.com'/>
                </div>
            </div>
        </div>
    )
}
