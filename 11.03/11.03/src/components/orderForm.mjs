import { useState } from 'react';
import axios from 'axios';
import './styles.css';

function OrderForm({ order = null, onSubmit }) {
  const [customerID, setCustomerID] = useState(order ? order.CustomerID : '');
  const [orderDate, setOrderDate] = useState(order ? order.OrderDate : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (order) {
        await axios.put(`http://localhost:3000/orders/${order.OrderID}`, { CustomerID: customerID, OrderDate: orderDate });
      } else {
        await axios.post('http://localhost:3000/orders', { CustomerID: customerID, OrderDate: orderDate });
      }
      onSubmit();
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} class="form-container">
      <label>
        Customer ID:
        <input type="text" value={customerID} onChange={(e) => setCustomerID(e.target.value)} />
      </label>
      <label>
        Order Date:
        <input type="date" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} />
      </label>
      <button type="submit">{order ? 'Edit Order' : 'Add Order'}</button>
    </form>
  );
}

export default OrderForm;