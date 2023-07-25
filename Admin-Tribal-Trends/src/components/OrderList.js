// OrderList.js
import React, { useState, useEffect } from 'react';
import '../css/OrderList.css';
const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders data from the backend API
    fetch('https://trible-trands.onrender.com/api/orderfrom')
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error(error));
  }, []);

    // Function to handle order deletion
    const handleDeleteOrder = async (orderId) => {
        try {
          const response = await fetch(`https://trible-trands.onrender.com/api/order/${orderId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (!response.ok) {
            throw new Error('Error deleting order.');
          }
    
          // Filter out the deleted order from the orders state
          setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
        } catch (error) {
          console.error(error);
        }
      };

  return (
    <div className="order-list"> {/* Add the "order-list" class */}
      <h2>Order List</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              <p><strong>Name: {order.name}</strong></p>
              <p><strong>Email: {order.email}</strong></p>
              <p><strong>Phone:</strong> {order.phone}</p>
              <p><strong>Address: </strong>{order.address}</p>
              <p><strong>Country:</strong> {order.country}</p>
              <p><strong>State:</strong> {order.state}</p>
              <p><strong>District:</strong> {order.district}</p>
              <p><strong>Total Price: ${order.totalPrice.toFixed(2)}</strong></p>
              <p><strong>Payment Method: {order.isCashOnDelivery ? 'Cash on Delivery' : 'Online Payment'}</strong></p>

              <h3>Products:</h3>
              <ul>
                {order.products.map((product, index) => (
                  <li key={index}>
                    <p>{product.name} - Quantity: {product.count}</p>
                  </li>
                ))}
              </ul>
              <button onClick={() => handleDeleteOrder(order._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderList;
