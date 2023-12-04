import { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Categories = () => {
  const [categories, setCategories] = useState([]);
 

  useEffect(() => {
    const getCategories = async () => {
      const options = {
        method: 'GET',
        url: 'https://wayfair.p.rapidapi.com/categories/list',
        params: {caid: '214970'},
        headers: {
          'X-RapidAPI-Key': '62ef5d8136msh78832de175babeap1f7b3ejsn8a47728230a4',
          'X-RapidAPI-Host': 'wayfair.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setCategories(response.data.response.categoryAppData.departmentCategories);
        console.log(response.data.response.categoryAppData.departmentCategories)
      } catch (error) {
        console.error('Error fetching data cannot able to get categories :', error);
      }
    };

    getCategories();
  }, []); 


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
          <div key={category.categoryId}>
            <div className='image-placeholder'>
           <p>{category.displayName}</p>  
            </div>

            <p>{category.displayName}</p>
          </div>
        ))}
        </Slider>
      </div>
      
    </div>
  );
};
