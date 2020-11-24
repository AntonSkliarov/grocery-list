import React from 'react';
import PropTypes from 'prop-types';

export function ListItem({ product, deleteProduct }) {
  return (
    <li>
      {`Name: ${product.name}`}

      <select>
        <option value={product.status}>{product.status}</option>
        <option value="Ran out">Ran out</option>
        <option value="Have">Have</option>
      </select>

      {`Priority: ${product.priority}`}
      <button
        type="button"
        title="delete product from the list"
        onClick={() => deleteProduct(product.id)}
      >
        X
      </button>
    </li>
  );
}

ListItem.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
  }).isRequired,
};
