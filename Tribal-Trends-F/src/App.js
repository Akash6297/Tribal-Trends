import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SginInFrom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Contact from './components/ContactForm'; 
import Reset from "./components/reset";
import OrderForm from './pages/OrderForm';
import './styles.css'; // Import the CSS file
import './css/Popup.css';
import './css/navbar.css';
import './css/Categories.css';
import './css/cart.css';
import './css/Products.css';
import './css/footer.css';
import './css/contactForm.css';
const App = () => {
  return (
    <Router>
      <div>
      <Navbar />
      <div className="container"> {/* Add container class */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/signin" component={SignInForm} />
          <Route path="/reset" component={Reset } />
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/orderform" component={OrderForm} />
          <Route path="/products">
              <Products />
            </Route>
            <Route path="/categories" component={Categories} />
            <Route path="/cart">
              <Cart cartItems={[]} />
              </Route>
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
