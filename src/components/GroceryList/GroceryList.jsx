import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from '../ListItem';

export function GroceryList({ products }) {
  return (
    <ul>
      {products.map(product => (
        <ListItem
          key={product.id}
          product={product}
        />
      ))}
    </ul>
  );
}

GroceryList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      priority: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
