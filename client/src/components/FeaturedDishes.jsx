import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DishCard from './DishCard';
import { motion } from 'framer-motion';

const FeaturedDishes = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/dishes')
      .then(res => setDishes(res.data.slice(0, 6))) // Limit to 6 featured dishes
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="py-14 px-4 md:px-10 bg-gradient-to-b from-white via-red-50 to-white text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-6 text-red-600"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Featured Dishes
      </motion.h2>

      <motion.p
        className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Carefully curated from our menu – these dishes are the top picks among our foodies!
      </motion.p>

      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            }
          }
        }}
      >
        {dishes.map(dish => (
          <motion.div
            key={dish._id}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.5 }}
          >
            <DishCard dish={dish} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturedDishes;
