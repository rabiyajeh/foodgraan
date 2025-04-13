import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import axios from "axios";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const total = cartItems.reduce((acc, item) => acc + item.price, 0); // Calculate total price

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.address) {
      alert("Please fill all the fields.");
      return;
    }

    const orderData = {
      ...form,
      cartItems,
      totalPrice: total,
      paymentInfo: 'test-payment-info',
    };

    try {
      const response = await axios.post('http://localhost:8080/api/orders', orderData);
      console.log('Order Placed:', response.data);

      clearCart();
      alert("✅ Order placed successfully!");
    } catch (error) {
      console.log('Error placing order:', error);
      alert("❌ Error placing order, please try again.");
    }
  };

  return (
    <div className="container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
        <textarea name="address" value={form.address} onChange={handleChange} placeholder="Address"></textarea>
        <button type="submit">Place Order</button>
      </form>

      <h2>Order Summary</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Checkout;
