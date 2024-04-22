import React from 'react';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';


export default function ProductBox({ product }) {
    const { name, price, rating, ratingCount } = product;

    return (
        <div className='w-72 flex flex-col gap-2 rounded-md shadow-md border border-gray-300 h-96'>
            <div className="h-1/2 w-full">
                <img className='max-w-full max-h-full m-auto' src="https://m.media-amazon.com/images/I/81+GIkwqLIL._SL1500_.jpg" alt="product Image" />
            </div>
            <div className="flex justify-evenly">
                <div className="flex gap-2">
                    <Rating name="read-only" value={rating} readOnly />
                </div>
                <div className="text-sm">{ratingCount}</div>
            </div>
            <div className="truncate font-medium">{name}</div>
            <div className="">{price.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR'
            })}</div>
            <Link className='w-1/2 text-sm font-semibold self-center bg-black text-white rounded-md shadow-md px-4 py-3'>Add To Cart</Link>
        </div>
    )
}
