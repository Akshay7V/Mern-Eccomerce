import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Rating } from '@mui/material';

export default function CartPage() {
  const { user } = useContext(UserContext);
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    const getCartProducts = async () => {
      const res = await fetch('/api/user/get-cart');
      if (res.ok) {
        const data = await res.json();
        console.log({ data });
        setCartProducts(data.cartProducts)
      }
    }
    getCartProducts();
  }, [user])

  console.log(user);
  console.log(cartProducts);
  return (
    <>
      <Header />
      <div className="w-full bg-gray-200">
        <h1 className='text-center text-3xl p-5'>Your Cart</h1>
        <div className='w-full flex flex-col justify-around items-center gap-3 p-3'>
          {cartProducts.length > 0 && (
            cartProducts.map((item, i) => (
              <div key={i} className="bg-white flex items-center justify-evenly w-3/4 rounded-lg border border-gray-300 shadow-lg h-80 p-3">
                <div className="flex flex-col gap-2">
                  <img className='w-40' src="https://m.media-amazon.com/images/I/81+GIkwqLIL._SL1500_.jpg" alt="Product Image" />
                  <div className='capitalize font-semibold text-center'>{item.name}</div>
                </div>
                <div className='font-semibold'>{item.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</div>
                <Rating name="read-only" value={item.rating} readOnly />
              </div>
            ))
          )}
        </div>
        <div className="flex justify-center items-center py-6">
          <button className='py-4 px-3 rounded-md shadow-md bg-black text-white font-semibold cursor-pointer'>Continue to checkout</button>
        </div>
      </div>
      <Footer />
    </>
  )
}
