import { useState } from 'react';
import axios from 'axios';
import '../styles.css';

function ProductForm({ product = null, onSubmit }) {
  const [name, setName] = useState(product ? product.Name : '');
  const [price, setPrice] = useState(product ? product.Price : '');
  const [categoryID, setCategoryID] = useState(product ? product.CategoryID : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (product) {
        await axios.put(`http://localhost:3000/products/${product.ProductID}`, { Name: name, Price: price, CategoryID: categoryID });
      } else {
        await axios.post('http://localhost:3000/products', { Name: name, Price: price, CategoryID: categoryID });
      }
      onSubmit();
    } catch (error) {
      console.error('Error submitting product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} class="form-container">
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Category ID:
        <input type="text" value={categoryID} onChange={(e) => setCategoryID(e.target.value)} />
      </label>
      <button type="submit">{product ? 'Edit Product' : 'Add Product'}</button>
    </form>
  );
}

export default ProductForm;