import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.log("Error fetching orders:", error));
  }, []);

  const handleOrderStatusChange = async (orderId, status) => {
    try {
      await axios.patch(`http://localhost:8080/api/orders/${orderId}`, { status });
      setOrders(prevOrders => prevOrders.map(order => 
        order._id === orderId ? { ...order, status } : order
      ));
    } catch (error) {
      console.log('Error updating order status:', error);
    }
  };

  return (
    <div>
      <h1>Manage Orders</h1>
      <div>
        {orders.map(order => (
          <div key={order._id}>
            <h3>Order #{order._id}</h3>
            <p>Customer: {order.customer.name}</p>
            <p>Total: ${order.totalPrice}</p>
            <p>Status: {order.status}</p>
            <button onClick={() => handleOrderStatusChange(order._id, "Processed")}>Process</button>
            <button onClick={() => handleOrderStatusChange(order._id, "Shipped")}>Ship</button>
            <button onClick={() => handleOrderStatusChange(order._id, "Completed")}>Complete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
