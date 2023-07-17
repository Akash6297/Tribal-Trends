import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import Cart from './pages/Cart';
import './App.scss';


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/products"
          render={(props) => <Products {...props} addToCart={addToCart} />}
        />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route
          path="/cart"
          render={(props) => <Cart {...props} cartItems={cartItems} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
