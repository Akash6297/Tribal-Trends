// Product.js
import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import { useParams } from 'react-router-dom';

const Products = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://trible-trands.onrender.com/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const filteredProducts = category ? products.filter((product) => product.category === category) : products;

  const categories = ['Dresses', 'Tops', 'Pants', 'Shoes', 'Accessories'];

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => {
      // Check if the item exists in the cart
      const existingItem = prevItems.find((item) => item.id === itemId);

      if (existingItem) {
        // If the item count is more than 1, decrease the count by 1
        if (existingItem.count > 1) {
          return prevItems.map((item) =>
            item.id === itemId ? { ...item, count: item.count - 1 } : item
          );
        } else {
          // If the item count is 1 or less, remove the item from the cart
          return prevItems.filter((item) => item.id !== itemId);
        }
      } else {
        return prevItems;
      }
    });
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // If the item already exists, increase the count by 1
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        // If the item is not in the cart, add it with count 1
        return [...prevItems, { ...product, count: 1 }];
      }
    });
  };
    // Calculate the total price for all items in the cart
    

  return (
    <div>
      <h1>Products</h1>
      {categories.map((cat) => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div className="product-list">
            {filteredProducts
              .filter((product) => product.category === cat)
              .map((product) => (
                <div key={product.id} className="product-item">
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>₹{product.price.toFixed(2)}</p>
                  <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  
                </div>
              ))}
          </div>
        </div>
      ))}

      <br />
      <br />
      <br />
      <Cart cartItems={cartItems} removeItem={handleRemoveItem} /> {/* Pass removeItem as a prop */}
    </div>
  );
};

export default Products;
