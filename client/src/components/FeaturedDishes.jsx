// components/FeaturedDishes.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DishCard from './DishCard';

const FeaturedDishes = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/dishes')
      .then(res => setDishes(res.data.slice(0, 6))) // Only first 6 dishes
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="py-10 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6 text-red-600">Featured Dishes</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dishes.map(dish => (
          <DishCard key={dish._id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedDishes;
