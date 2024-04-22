import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductBox from '../components/ProductBox';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/user/get-products');
        if (res.ok) {
          const products = await res.json();
          setProducts(products.products);
          setLoading(false);
        } else {
          setLoading(false);
          throw new Error('Failed to fetch products');
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    getAllProducts();
  }, []);

  return (
    <div>
      <Header />
      <div className='min-h-screen w-full text-3xl text-center p-4'>
        <div className="my-8 h-full w-full flex gap-6 flex-wrap justify-center">
          {!loading && products.length > 0 ? (
            products.map((product, i) => (
              <ProductBox key={i} product={product} />
            ))
          ) : (
            <h1 className='text-center'>No Products To Show</h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
