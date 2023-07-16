import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <NavItem path="/" label="Home" />
        <NavItem path="/products" label="Products" />
        <NavItem path="/about" label="About Us" />
        <NavItem path="/contact" label="Contact Us" />
        <NavItem path="/blog" label="Blog" />
        <NavItem path="/cart" label="Cart" />
      </ul>
      <div className="navbar-user">
        <button className="sign-button">Sign In / Sign Up</button>
      </div>
    </nav>
  );
}

function NavItem({ path, label }) {
  return (
    <li className="navbar-item">
      <a href={path} className="navbar-link">
        {label}
      </a>
    </li>
  );
}

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Navbar;
