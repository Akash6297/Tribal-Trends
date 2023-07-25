import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${showMenu ? 'show' : ''}`}>
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
          <li>
            <Link to="/">ProductUpdate</Link>
          </li>
          <li>
            <Link to="/productfrom">ProductForm</Link>
          </li>
          <li>
            <Link to="/message">ContactMessages</Link>
          </li>
          <li>
            <Link to="/orderlist">OrderList</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
