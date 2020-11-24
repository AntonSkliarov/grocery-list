import React from 'react';
import PropTypes from 'prop-types';

export function ListItem({ product }) {
  return (
    <li key={product.id}>
      {`Name: ${product.name}`}

      <select>
        <option>{`Status: ${product.status}`}</option>
      </select>

      {`Priority: ${product.priority}`}
      <button type="button" title="delete product from the list">
        X
      </button>
    </li>
  );
}

ListItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
  }).isRequired,
};
