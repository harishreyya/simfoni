import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const dummyImages = [
  'https://images.pexels.com/photos/5824896/pexels-photo-5824896.jpeg',
  'https://images.pexels.com/photos/3773583/pexels-photo-3773583.png',
  'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
  'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
  'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
];

export const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      {/* <h2>React Slick Slider Example</h2> */}
      <Slider {...settings}>
        {dummyImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide-${index}`} style={{ width: '80%', margin:"auto" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

