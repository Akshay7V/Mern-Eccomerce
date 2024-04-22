import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await fetch('/api/user/get-products');
        if (res.ok) {
          const products = await res.json();
          setProducts(products)
        }
      } catch (error) {
        console.log(error);
      }
    }
    getAllProducts();
  }, [])

  console.log(products);

  return (
    <div className="">
      <Header />
      <div className='h-screen w-screen text-3xl text-center'>Home Page</div>
      <Footer />
    </div>
  )
}
