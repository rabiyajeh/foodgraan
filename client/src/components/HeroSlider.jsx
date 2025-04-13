// components/HeroSlider.jsx
import React from 'react';
import Slider from 'react-slick';

const slides = [
  { image: '/assets/slider1.jpg', text: 'Delicious Flavors Await!' },
  { image: '/assets/slider2.jpg', text: 'Fresh Ingredients, Fresh Taste' },
  { image: '/assets/slider3.jpg', text: 'Savor Every Bite' },
];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="h-[60vh]">
      {slides.map((slide, idx) => (
        <div key={idx} className="relative h-[60vh]">
          <img
            src={slide.image}
            alt="slider"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold">
              {slide.text}
            </h2>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;
