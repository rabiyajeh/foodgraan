import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  customer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  items: [{
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  }],
  totalPrice: { type: Number, required: true },
  paymentInfo: { type: String, required: true },
  status: { type: String, default: 'Pending' },
}, { timestamps: true });

// Use export default for ES module
export default mongoose.model('Order', orderSchema);
