import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export function GroceryAddForm({ setProducts, products }) {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    if (name.length === 0 || priority === '') {
      return;
    }

    const newProduct = {
      name,
      status: 'ran out',
      priority,
      id: uuidv4(),
    };

    setProducts([
      ...products,
      newProduct,
    ]);

    setName('');
  };

  const selectPriority = useCallback(event => (
    setPriority(event.target.value)
  ), []);

  return (
    <div className="grocery-add-form">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="new-product"
          placeholder="Enter product name"
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <select
          className="product__priority-selector"
          onChange={selectPriority}
        >
          <option value="Select priority">Select priority</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div>
          <button type="submit">
            Add product
          </button>
        </div>
      </form>
    </div>
  );
}

GroceryAddForm.propTypes = {
  setProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      priority: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
