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
    // Fetch all dishes
    axios.get('http://localhost:8080/api/dishes')
      .then(response => setDishes(response.data))
      .catch(error => console.log(error));
  }, []);

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
    formData.append('image', newDish.image);

    try {
      await axios.post('http://localhost:8080/api/dishes', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      // Reset the form after adding the dish
      setNewDish({ name: '', description: '', price: '', image: null });
      // Fetch dishes again after adding a new one
      axios.get('http://localhost:8080/api/dishes')
        .then(response => setDishes(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/dishes/${id}`);
      // Refresh the list after deletion
      setDishes(dishes.filter(dish => dish._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <h1 className="text-3xl font-semibold text-center mb-8">Manage Dishes</h1>

      {/* Add New Dish Form */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Add a New Dish</h2>
        <input
          type="text"
          name="name"
          value={newDish.name}
          onChange={handleInputChange}
          placeholder="Dish Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <textarea
          name="description"
          value={newDish.description}
          onChange={handleInputChange}
          placeholder="Dish Description"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          name="price"
          value={newDish.price}
          onChange={handleInputChange}
          placeholder="Price"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded-md"
        >
          Add Dish
        </button>
      </form>

      {/* List of Dishes */}
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
            {/* Edit and Delete Options */}
            <div className="flex gap-2 mt-4">
              <button className="bg-yellow-500 text-white p-2 rounded-md">Edit</button>
              <button
                className="bg-red-500 text-white p-2 rounded-md"
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
