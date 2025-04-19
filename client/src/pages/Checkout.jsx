import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '' });
  const [paymentMethod, setPaymentMethod] = useState('cod'); // default payment method
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!form.name || !form.email || !form.phone || !form.address) {
      return 'Please fill all the fields.';
    }
    if (!emailPattern.test(form.email)) {
      return 'Please enter a valid email address.';
    }
    if (!phonePattern.test(form.phone)) {
      return 'Please enter a valid 10-digit phone number.';
    }
    if (form.address.length < 10) {
      return 'Address should be at least 10 characters long.';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      alert(validationError);
      return;
    }

    setLoading(true);

    const orderData = {
      ...form,
      cartItems,
      totalPrice: total,
      paymentInfo: paymentMethod === 'cod' ? 'Cash on Delivery' : 'Mock Payment',
    };

    try {
      const response = await axios.post('http://localhost:8080/api/orders', orderData);
      clearCart();
      setShowPopup(true);
    } catch (error) {
      alert('❌ Error placing order, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border border-gray-300 rounded px-4 py-2 w-full"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="border border-gray-300 rounded px-4 py-2 w-full"
            required
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border border-gray-300 rounded px-4 py-2 w-full"
            required
          />
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Shipping Address"
            className="border border-gray-300 rounded px-4 py-2 w-full md:col-span-2"
            rows="4"
            required
          ></textarea>

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium text-gray-700">Payment Method</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                />
                Cash on Delivery
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="mock"
                  checked={paymentMethod === 'mock'}
                  onChange={() => setPaymentMethod('mock')}
                />
                Mock Payment
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition md:col-span-2"
            disabled={loading}
          >
            {loading ? 'Placing Order...' : 'Place Order'}
          </button>
        </form>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="mb-4 space-y-2">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between border-b pb-2 text-gray-700">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
          <p className="text-lg font-semibold text-gray-800">Total: ${total.toFixed(2)}</p>
        </div>
      </div>

      {/* Popup Confirmation Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm text-center animate-fade-in">
            <h2 className="text-2xl font-bold text-green-600 mb-3">✅ Order Placed!</h2>
            <p className="text-gray-700 mb-4">
              Thank you for your order! You will receive an email confirmation shortly.
            </p>
            <button
              onClick={() => {
                setShowPopup(false);
                navigate('/');
              }}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Go to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
