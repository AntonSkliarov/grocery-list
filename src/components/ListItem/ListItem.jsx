import React from 'react';
import PropTypes from 'prop-types';

export const ListItem = ({ product, deleteProduct, statusChange }) => (
  <li className="list-group-item mb-3">

    <span className="text-info">Name: </span>
    {product.name}

    <div className="">
      <span className="text-info">Status: </span>
      <label>
        Ran out
        <input
          className="mr-3"
          type="radio"
          value="Ran out"
          checked={product.status === 'Ran out'}
          onChange={event => statusChange(event.target.value, product.id)}
        />
      </label>

      <label>
        Have
        <input
          type="radio"
          value="Have"
          checked={product.status === 'Have'}
          onChange={event => statusChange(event.target.value, product.id)}
        />
      </label>
    </div>

    <span className="text-info">Priority: </span>
    {product.priority}
    <div className="mt-2">
      <button
        className="btn btn-outline-danger btn-sm"
        type="button"
        title="delete product from the list"
        onClick={() => deleteProduct(product.id)}
      >
        Delete
      </button>
    </div>
  </li>
);

ListItem.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  statusChange: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
  }).isRequired,
};
