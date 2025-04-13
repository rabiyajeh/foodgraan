// src/pages/AddDish.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddDish = () => {
  const [dish, setDish] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setDish({ ...dish, image: files[0] });
    } else {
      setDish({ ...dish, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', dish.name);
    formData.append('price', dish.price);
    formData.append('description', dish.description);
    formData.append('category', dish.category);
    if (dish.image) formData.append('image', dish.image);

    try {
      const response = await axios.post('http://localhost:8080/api/dishes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Dish added:', response.data);
    } catch (error) {
      console.error('Error adding dish:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={dish.name} onChange={handleChange} placeholder="Dish Name" required />
      <input type="number" name="price" value={dish.price} onChange={handleChange} placeholder="Price" required />
      <textarea name="description" value={dish.description} onChange={handleChange} placeholder="Description" required />
      <input type="text" name="category" value={dish.category} onChange={handleChange} placeholder="Category" required />
      <input type="file" name="image" onChange={handleChange} />
      <button type="submit">Add Dish</button>
    </form>
  );
};

export default AddDish;
