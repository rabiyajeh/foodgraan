import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';

function Menu() {
  const [dishes, setDishes] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get('http://localhost:8080/api/dishes')
      .then(response => setDishes(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-green-50 py-10 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-12">Explore Our Delicious Menu</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {dishes.map(dish => (
          <div key={dish._id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 overflow-hidden">
            <img
              src={`http://localhost:8080/uploads/${dish.image}`} // ✅ Corrected path
              alt={dish.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{dish.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{dish.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-semibold text-lg">${dish.price}</span>
                <button
                  onClick={() => addToCart(dish)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {dishes.length === 0 && (
        <p className="text-center text-gray-600 mt-10">No dishes found.</p>
      )}
    </div>
  );
}

export default Menu;
