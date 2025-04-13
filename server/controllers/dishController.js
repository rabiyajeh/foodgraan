import Dish from '../models/Dish.js';
import fs from 'fs';
import path from 'path';

const getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const addDish = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const image = req.file.filename;

    const newDish = new Dish({ name, price, description, category, image });
    await newDish.save();

    res.status(201).json(newDish);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add dish' });
  }
};

const updateDish = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedData = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
    };

    if (req.file) {
      updatedData.image = req.file.filename;
    }

    const updatedDish = await Dish.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(200).json(updatedDish);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update dish' });
  }
};

const deleteDish = async (req, res) => {
  const { id } = req.params;

  try {
    const dish = await Dish.findById(id);
    if (!dish) return res.status(404).json({ message: 'Dish not found' });

    // Remove image file
    const imagePath = path.join('uploads', dish.image);
    if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);

    await Dish.findByIdAndDelete(id);
    res.status(200).json({ message: 'Dish deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete dish' });
  }
};

export {
  getAllDishes,
  addDish,
  updateDish,
  deleteDish,
};
