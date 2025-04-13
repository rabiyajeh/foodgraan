import React from 'react';
import HeroSlider from '../components/HeroSlider';
import FeaturedDishes from '../components/FeaturedDishes';
import Banner from '../components/Banner';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="font-sans">
      <HeroSlider />
      <FeaturedDishes />
      <Banner />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
