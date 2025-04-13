import mongoose from 'mongoose';

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: String,
  category: String,
  image: {
    type: String, // stored as filename
    required: true
  },
}, { timestamps: true });

export default mongoose.model('Dish', dishSchema);
