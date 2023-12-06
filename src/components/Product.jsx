import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LoadingSpinner } from './LoadingSpinner';

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
          'X-RapidAPI-Key': '92a86a1fd9msh31181e91e5f8351p100809jsndc3de2c0bed0',
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
      <h2 className='sub-headings'>SEE MORE ITEMS</h2>
      <div className='search-result-wrap'>
        {products.map((product, index) => (
         <a href={product.url}>
         <div className='search-result-card' key={index}>
         <img src="https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        
         <p className='display-name'><b>{product.name}</b></p>
         <div className='grey'>{product.leadImage.id}</div>
         <p ><b className='price'>${product.pricing.customerPrice.unitPrice.value}</b><span className='grey'>/each</span></p>
         <div><b className='green'>Saving % 4.06</b></div>
         <div className='display-name' ><b>Supplier:</b> {product.manufacturer.name}Supplier</div>
         <div><b>Delivery by:</b> 24 dec 2023</div>
         <button className='button flex cart'>Add to Cart</button>
       </div>
       </a>
        ))}
       
      </div>
      {loading && <LoadingSpinner/>}
    </div>
  );
};


