import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const AllItems = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const options = {
        method: 'GET',
        url: 'https://wayfair.p.rapidapi.com/products/list',
        params: {
          categoryId:"45974",
          itemsPerPage: '40',
          page: '1',
        },
        headers: {
          'X-RapidAPI-Key': 'bb54ea9497msh3dcb2dde67b422fp1c7e37jsn146b956453a2',
          'X-RapidAPI-Host': 'wayfair.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setProducts(response.data.response.data.category.browse.products);
        console.log(response.data.response.data.category.browse.products)
      } catch (error) {
        console.error('Error fetching data cannot able to get products:', error);
      } finally{
        setLoading(false)
      }
    };
 
    getProducts();
  }, [page]);

  const displayedProducts = products.slice(0, 10);

  return (
    <div>
   <Link to={"/products"} ><div className='see-more flex'>See more &#10148;</div> </Link> 
      <h2>All items</h2>
      
      <div className='search-result-wrap'>
        {displayedProducts.map((product, index) => (
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
        ))}
        {/* {loading && <p>Loading...</p>} */}
      </div>
     
    </div>
  );
};


