import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

// Custom hook for fetching cart products
const useCartProducts = (user) => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const getCartProducts = async () => {
      if (user) {
        const res = await fetch('/api/user/get-cart');
        if (res.ok) {
          const data = await res.json();
          setCartProducts(data.cartProducts);
        }
      }
    };
    getCartProducts();
  }, [user]);

  return cartProducts;
};

const CartPage = () => {
  const { user } = useContext(UserContext);
  const cartProducts = useCartProducts(user);

  return (
    <>
      <Header />
      <div className="w-full bg-gray-200">
        <h1 className="text-center text-3xl p-5">Your Cart</h1>
        <div className="w-full flex flex-col justify-around items-center gap-3 p-3">
          {cartProducts.length > 0 ? (
            cartProducts.map((item, i) => (
              <div key={i} className="bg-white flex items-center justify-evenly w-3/4 rounded-lg border border-gray-300 shadow-lg h-80 p-3">
                <div className="flex flex-col gap-2">
                  <img className="w-40" src="https://m.media-amazon.com/images/I/81+GIkwqLIL._SL1500_.jpg" alt="Product Image" />
                  <div className="capitalize font-semibold text-center">{item.name}</div>
                </div>
                <div className="font-semibold">{item.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</div>
                <Rating name="read-only" value={item.rating} readOnly />
              </div>
            ))
          ) : (
            <div className="bg-white w-1/2 max-h-96 flex flex-col gap-2 items-center justify-center m-auto mt-20 rounded-md shadow-md p-4">
              <img className="h-72" src="https://cdn.dribbble.com/users/3956545/screenshots/15463522/media/e763f7a49068517dd5fc3b6dc5006df8.jpg?resize=1000x750&vertical=center" alt="" />
              <h2 className="text-xl font-semibold">Empty Cart</h2>
              <Link className="text-center" to={'/'}>Back to Home</Link>
            </div>
          )}

          {cartProducts.length > 0 && (
            <div className="flex justify-center items-center py-6">
              <button className="py-4 px-3 rounded-md shadow-md bg-black text-white font-semibold cursor-pointer">Continue to checkout</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
