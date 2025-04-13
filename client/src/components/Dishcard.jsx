import React from 'react';

const DishCard = ({ dish }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-56 object-cover"
        src={`http://localhost:8080${dish.image}`}
        alt={dish.name}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{dish.name}</h3>
        <p className="text-gray-600">{dish.description}</p>
        <p className="text-gray-900 mt-2">Price: ${dish.price}</p>
        <p className="text-gray-600">{dish.category}</p>
      </div>
    </div>
  );
};

export default DishCard;
