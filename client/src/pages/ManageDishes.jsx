import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageDishes = () => {
  const [dishes, setDishes] = useState([]);
  const [newDish, setNewDish] = useState({
    name: '',
    description: '',
    price: '',
    image: null
  });

  useEffect(() => {
    fetchDishes();
  }, []);

  const fetchDishes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/dishes');
      setDishes(response.data);
    } catch (error) {
      console.error('Error fetching dishes:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDish((prevDish) => ({
      ...prevDish,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setNewDish((prevDish) => ({
      ...prevDish,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', newDish.name);
    formData.append('description', newDish.description);
    formData.append('price', newDish.price);
    if (newDish.image) {
      formData.append('image', newDish.image);
    }

    try {
      await axios.post('http://localhost:8080/api/dishes', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setNewDish({ name: '', description: '', price: '', image: null });
      fetchDishes();
    } catch (error) {
      console.error('Error adding dish:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/dishes/${id}`);
      setDishes(dishes.filter((dish) => dish._id !== id));
    } catch (error) {
      console.error('Error deleting dish:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Manage Dishes</h1>

      {/* Add New Dish Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Add a New Dish</h2>
        <input
          type="text"
          name="name"
          value={newDish.name}
          onChange={handleInputChange}
          placeholder="Dish Name"
          className="w-full mb-3 p-2 border border-gray-300 rounded-md"
          required
        />
        <textarea
          name="description"
          value={newDish.description}
          onChange={handleInputChange}
          placeholder="Dish Description"
          className="w-full mb-3 p-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="number"
          name="price"
          value={newDish.price}
          onChange={handleInputChange}
          placeholder="Price"
          className="w-full mb-3 p-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full mb-3 p-2 border border-gray-300 rounded-md"
          accept="image/*"
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded-md"
        >
          Add Dish
        </button>
      </form>

      {/* Dishes List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <div key={dish._id} className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-semibold text-gray-800">{dish.name}</h2>
            <p className="text-gray-600 mt-2">{dish.description}</p>
            <p className="text-xl font-bold text-gray-700 mt-2">${dish.price}</p>
            <img
              src={dish.image} // Using full image URL from backend
              alt={dish.name}
              className="mt-4 w-full h-48 object-cover rounded-md"
            />
            <div className="flex justify-between mt-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md">
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                onClick={() => handleDelete(dish._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageDishes;
