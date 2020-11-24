import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export function GroceryAddForm({ setProducts, products }) {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    if (name.length === 0
      || priority === ''
      || status === ''
    ) {
      return;
    }

    const newProduct = {
      name,
      status,
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
    setPriority(Number(event.target.value))
  ), []);

  const selectStatus = useCallback(event => (
    setStatus(event.target.value)
  ), []);

  return (
    <div className="grocery-add-form px-3 mr-4">
      <h3 className="m-2">Add new product</h3>
      <form onSubmit={onSubmit} className="form-group m-2">
        <input
          type="text"
          className="new-product form-control mb-3"
          placeholder="Enter product name"
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <select
          className="custom-select mb-3"
          onChange={selectPriority}
        >
          <option value="" disabled selected>Select priority</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <select
          className="custom-select mb-4"
          onChange={selectStatus}
        >
          <option value="" disabled selected>Select status</option>
          <option value="Ran out">Ran out</option>
          <option value="Have">Have</option>
        </select>

        <div>
          <button
            type="submit"
            className="btn btn-primary btn-sm"
          >
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
