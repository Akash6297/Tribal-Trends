// Product.js
import React from 'react';
import PropTypes from 'prop-types';

function Product({ product }) {
  const { name, price } = product;

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
