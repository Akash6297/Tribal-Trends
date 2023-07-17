import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="header">
        <h1>Welcome to Tribal Trends</h1>
        <p>Discover amazing products and great deals</p>
        <a href="/products" className="shop-now-btn">Shop Now</a>
      </header>
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-cards">
          <ProductCard
            imageSrc="http://via.placeholder.com/640x360"
            description="Product 1 Description"
            price="$19.99"
            link="/products/1"
          />
          <ProductCard
            imageSrc="http://via.placeholder.com/640x360"
            description="Product 2 Description"
            price="$29.99"
            link="/products/2"
          />
          <ProductCard
            imageSrc="http://via.placeholder.com/640x360"
            description="Product 3 Description"
            price="$39.99"
            link="/products/3"
          />
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2023 Your E-commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
