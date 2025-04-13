// components/Testimonials.jsx
import React from 'react';
import Slider from 'react-slick';

const reviews = [
  {
    name: 'Ali Khan',
    feedback: 'Amazing taste and quick delivery!',
  },
  {
    name: 'Sara Ahmed',
    feedback: 'My go-to place for healthy meals!',
  },
  {
    name: 'John Doe',
    feedback: 'Best food and amazing staff!',
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-blue-50 py-10 text-center px-4">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">What Our Customers Say</h2>
      <Slider {...settings}>
        {reviews.map((r, idx) => (
          <div key={idx} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic">"{r.feedback}"</p>
            <h4 className="mt-4 font-semibold text-red-600">- {r.name}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
