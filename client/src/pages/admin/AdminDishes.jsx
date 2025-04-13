import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDishes = () => {
  const [dishes, setDishes] = useState([]);
  const [newDish, setNewDish] = useState({ name: '', description: '', price: '', image: '' });
  
  // Fetch dishes
  useEffect(() => {
    axios.get('http://localhost:8080/api/dishes')
      .then(response => setDishes(response.data))
      .catch(error => console.log(error));
  }, []);

  // Add a new dish
  const handleAddDish = () => {
    axios.post('http://localhost:8080/api/dishes', newDish)
      .then(response => {
        setDishes([...dishes, response.data]);
        setNewDish({ name: '', description: '', price: '', image: '' }); // Reset form
      })
      .catch(error => console.log(error));
  };

  // Delete a dish
  const handleDeleteDish = (id) => {
    axios.delete(`http://localhost:8080/api/dishes/${id}`)
      .then(() => {
        setDishes(dishes.filter(dish => dish._id !== id));
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <h1 className="text-3xl font-semibold text-center mb-8">Manage Dishes</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Add New Dish</h2>
        <input
          type="text"
          placeholder="Name"
          value={newDish.name}
          onChange={(e) => setNewDish({ ...newDish, name: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Description"
          value={newDish.description}
          onChange={(e) => setNewDish({ ...newDish, description: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="number"
          placeholder="Price"
          value={newDish.price}
          onChange={(e) => setNewDish({ ...newDish, price: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="file"
          placeholder="Image"
          onChange={(e) => setNewDish({ ...newDish, image: e.target.files[0] })}
          className="border p-2 mb-2 w-full"
        />
        <button
          onClick={handleAddDish}
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Add Dish
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map(dish => (
          <div key={dish._id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-2xl font-semibold text-gray-800">{dish.name}</h2>
            <p className="text-gray-600 mt-2">{dish.description}</p>
            <p className="text-xl font-bold text-gray-700 mt-2">${dish.price}</p>
            <img
              src={`http://localhost:8080/${dish.image}`}
              alt={dish.name}
              className="mt-4 w-full h-48 object-cover rounded-lg"
            />
            <button
              onClick={() => handleDeleteDish(dish._id)}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDishes;
