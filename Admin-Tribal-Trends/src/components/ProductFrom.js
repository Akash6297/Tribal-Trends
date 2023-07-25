// src/ProductForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../css/ProductFrom.css';

const ProductForm = ({ onProductAdded }) => {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    image: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.id && product.name && product.price && product.image && product.category) {
      axios.post('https://trible-trands.onrender.com/api/products', product)
        .then((response) => {
          console.log('Product added:', response.data);
          setProduct({
            id: '',
            name: '',
            price: '',
            image: '',
            category: '',
          });
          onProductAdded(response.data); // Notify the parent component that a new product was added
          
        })
        .catch((error) => {
          console.error('Error adding product:', error);
        });
    } else {
      alert('Please fill in all required fields.');
    }
    alert('Successfully Added Product!!');
  };

  return (
    <div className="product-form">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="text" name="id" value={product.id} onChange={handleChange} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={product.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={product.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="image" value={product.image} onChange={handleChange} required />
        </div>
        <div>
          <label>Category:</label>
          <select name="category" value={product.category} onChange={handleChange} required>
            <option value="">Select a category</option>
            <option value="Dresses">Dresses</option>
            <option value="Tops">Tops</option>
            <option value="Pants">Pants</option>
            <option value="Shoes">Shoes</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
