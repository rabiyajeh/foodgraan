import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images from src/assets
import Slide1 from '../assets/Slide1.jpg';
import Slide2 from '../assets/Slide2.jpg';
import Slide3 from '../assets/Slide3.jpg';

const slides = [
  { image: Slide1, headline: 'Delicious Flavors Await', sub: 'Bringing gourmet straight to your table' },
  { image: Slide2, headline: 'Fresh Ingredients', sub: 'Crafted with quality and care' },
  { image: Slide3, headline: 'Savor Every Bite', sub: 'Indulge in the taste of perfection' },
];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="relative h-[80vh] overflow-hidden group">
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
              <img
                src={slide.image}
                alt={`Slide ${idx}`}
                className="w-full h-full object-cover brightness-[0.65]"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.div
                className="text-center px-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl">
                  {slide.headline}
                </h2>
                <p className="mt-4 text-white/80 text-lg md:text-xl drop-shadow-md">
                  {slide.sub}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/menu'}
                  className="mt-8 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium text-lg rounded-full shadow-lg transition duration-300"
                >
                  Explore Menu
                </motion.button>
              </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-0" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
