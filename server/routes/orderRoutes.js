const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // Order model for MongoDB

// POST route to create a new order
router.post('/orders', async (req, res) => {
  try {
    // Destructure the order data from the request body
    const { name, email, phone, address, cartItems, totalPrice, paymentInfo } = req.body;
    
    // Create a new order object
    const order = new Order({
      customer: { name, email, phone, address },
      items: cartItems,
      totalPrice,
      paymentInfo,
      status: 'Pending', // Default order status
    });
    
    // Save the order to the database
    const savedOrder = await order.save();
    res.status(201).json(savedOrder); // Respond with the saved order
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Failed to place order' });
  }
});

// GET route to fetch all orders (Admin access)
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find(); // Retrieve all orders from the database
    res.status(200).json(orders); // Respond with the list of orders
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Failed to retrieve orders' });
  }
});

// GET route to fetch a specific order by its ID (Admin or User view)
router.get('/orders/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id); // Find order by ID
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order); // Respond with the order data
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Failed to retrieve order' });
  }
});

// PATCH route to update order status (Admin access)
router.patch('/orders/:id', async (req, res) => {
  try {
    const { status } = req.body; // Get the new status from the request body
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true } // Return the updated order
    );
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order); // Respond with the updated order
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Failed to update order status' });
  }
});

// DELETE route to delete an order (Admin access)
router.delete('/orders/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id); // Find and delete the order by ID
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted successfully' }); // Respond with a success message
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Failed to delete order' });
  }
});

module.exports = router;
