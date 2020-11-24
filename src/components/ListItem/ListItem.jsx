import React from 'react';
import PropTypes from 'prop-types';

export function ListItem({ product, deleteProduct, statusChange }) {
  return (
    <li className="listItem">
      {`Name: ${product.name}`}

      {/* <select>
        <option value={product.status}>{product.status}</option>
        <option value="Ran out">Ran out</option>
        <option value="Have">Have</option>
      </select> */}

      <div>
        <label>
          Ran out
          <input
            type="radio"
            value="Ran out"
            checked={product.status === 'Ran out'}
            onChange={event => statusChange(event.target.value, product.id)}
          />
        </label>
        <br />
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

      {`Priority: ${product.priority}`}
      <div>
        <button
          type="button"
          title="delete product from the list"
          onClick={() => deleteProduct(product.id)}
        >
          Delete product
        </button>
      </div>
    </li>
  );
}

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
