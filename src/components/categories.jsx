import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Categories = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const options = {
        method: 'GET',
        url: 'https://wayfair.p.rapidapi.com/categories/list',
        params: { caid: '214970' },
        headers: {
          'X-RapidAPI-Key': 'bb54ea9497msh3dcb2dde67b422fp1c7e37jsn146b956453a2',
          'X-RapidAPI-Host': 'wayfair.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setCategories(response.data.response.categoryAppData.departmentCategories);
        console.log(response.data.response.categoryAppData.departmentCategories)
      } catch (error) {
        console.error('Error fetching data cannot able to get categories:', error);
      }
    };

    getCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    onSelectCategory(categoryId);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <h2>Best Selling</h2>
      <div>
        <Slider {...settings}>
          {categories.map((category) => (
            <div key={category.categoryId} onClick={() => handleCategoryClick(category.categoryId)}>
              <div className='image-placeholder'>
                <p>{category.displayName}</p>
                <p className='d-none'>{category.categoryId}</p>
              </div>
              <p>{category.displayName}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
