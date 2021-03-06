import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { ListItem } from '../ListItem';

export function GroceryList({
  products,
  deleteProduct,
  setCurrentFilterStatus,
  statusChange,
}) {
  const setFilter = useCallback((event) => {
    setCurrentFilterStatus(event.target.value);
  }, []);

  return (
    <>
      <label>
        <span className="text-info">Choose a status filter option: </span>
        <select
          className="custom-select custom-select-sm"
          onChange={setFilter}
        >
          <option value="All">All</option>
          <option value="Ran out">Ran out</option>
          <option value="Have">Have</option>
        </select>
      </label>

      <ul className="list-group">
        {products.map(product => (
          <ListItem
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
            statusChange={statusChange}
          />
        ))}
      </ul>
    </>
  );
}

GroceryList.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  statusChange: PropTypes.func.isRequired,
  setCurrentFilterStatus: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      priority: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
