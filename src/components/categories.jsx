import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LoadingSpinner } from './LoadingSpinner';

export const Categories = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const options = {
        method: 'GET',
        url: 'https://wayfair.p.rapidapi.com/categories/list',
        params: { caid: '214970' },
        headers: {
          'X-RapidAPI-Key': '92a86a1fd9msh31181e91e5f8351p100809jsndc3de2c0bed0',
          'X-RapidAPI-Host': 'wayfair.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setCategories(response.data.response.categoryAppData.departmentCategories);
      } catch (error) {
        console.error('Error fetching data cannot able to get categories:', error);
      }finally {
        setLoading(false);
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
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home-body">
      <h4 className='sub-headings'>BEST CATEGORIES</h4>
      <div>
        <Slider {...settings}>
          {categories.map((category) => (
            <div
              className="category-slide-wrap"
              key={category.categoryId}
              onClick={() => handleCategoryClick(category.categoryId)}
            >
              <div className="image-placeholder flex">
                <img
                  src="https://images.pexels.com/photos/6527063/pexels-photo-6527063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
              </div>
              <p>{category.displayName}</p>
            </div>
          ))}
        </Slider>
        {loading && <LoadingSpinner/>}
      </div>
    </div>
  );
};
