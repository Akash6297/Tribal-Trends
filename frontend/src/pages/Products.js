import React from 'react';

const Products = ({ addToCart }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <h1>Products</h1>
      <div>
        <h3>Product 1</h3>
        <p>Price: $19.99</p>
        <button onClick={() => handleAddToCart({ id: 1, name: 'Product 1', price: 19.99 })}>
          Add to Cart
        </button>
      </div>
      <div>
        <h3>Product 2</h3>
        <p>Price: $29.99</p>
        <button onClick={() => handleAddToCart({ id: 2, name: 'Product 2', price: 29.99 })}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
