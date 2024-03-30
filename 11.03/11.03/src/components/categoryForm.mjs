import { useState } from 'react';
import axios from 'axios';
import './styles.css';

function CategoryForm({ category = null, onSubmit }) {
  const [name, setName] = useState(category ? category.Name : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (category) {
        await axios.put(`http://localhost:3000/categories/${category.CategoryID}`, { Name: name });
      } else {
        await axios.post('http://localhost:3000/categories', { Name: name });
      }
      onSubmit();
    } catch (error) {
      console.error('Error submitting category:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} class="form-container">
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button type="submit">{category ? 'Edit Category' : 'Add Category'}</button>
    </form>
  );
}

export default CategoryForm;