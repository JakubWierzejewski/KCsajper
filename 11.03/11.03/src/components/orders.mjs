import { useEffect, useState } from 'react';
import axios from 'axios';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.OrderID}>Order ID: {order.OrderID}, Customer ID: {order.CustomerID}, Order Date: {order.OrderDate}</li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;