// ProductList.js
import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

function ProductList({ products }) {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductList;
