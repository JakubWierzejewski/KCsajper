import { useState } from 'react';
import axios from 'axios';
import './styles.css';

function CustomerForm({ customer = null, onSubmit }) {
  const [name, setName] = useState(customer ? customer.Name : '');
  const [email, setEmail] = useState(customer ? customer.Email : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (customer) {
        await axios.put(`http://localhost:3000/customers/${customer.CustomerID}`, { Name: name, Email: email });
      } else {
        await axios.post('http://localhost:3000/customers', { Name: name, Email: email });
      }
      onSubmit();
    } catch (error) {
      console.error('Error submitting customer:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} class="form-container">
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">{customer ? 'Edit Customer' : 'Add Customer'}</button>
    </form>
  );
}

export default CustomerForm;