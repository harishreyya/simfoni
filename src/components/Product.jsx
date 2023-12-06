import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 20
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const options = {
        method: 'GET',
        url: 'https://wayfair.p.rapidapi.com/products/list',
        params: {
          itemsPerPage: '48',
          page: page,
        },
        headers: {
          'X-RapidAPI-Key': 'bb54ea9497msh3dcb2dde67b422fp1c7e37jsn146b956453a2',
          'X-RapidAPI-Host': 'wayfair.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        const newProducts = response.data.response.data.category.browse.products;
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      } catch (error) {
        console.error('Error fetching data cannot able to get products:', error);
      } finally {
        setLoading(false);
      }
    };
 
    getProducts();
  }, [page]);

  return (
    <div>
      <h2>All items</h2>
      <div className='search-result-wrap'>
        {products.map((product, index) => (
          <div className='search-result-card' key={index}>
            <img src="https://images.pexels.com/photos/5760872/pexels-photo-5760872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <p className='display-name'><b>{product.name}</b></p>
            <div className='grey'>{product.ireId}</div>
            <p ><b className='price'>$0.83</b><span className='grey'>/each</span></p>
            <div><b className='green'>Saving % 4.06</b></div>
            <div><b>Supplier:</b> Supplier</div>
            <div><b>Delivery by:</b> 24 dec 2023</div>
            <button className='button flex cart'>Add to Cart</button>
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
     
    </div>
  );
};


