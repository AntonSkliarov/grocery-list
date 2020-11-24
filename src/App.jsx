import React, { useEffect, useState } from 'react';
import './App.scss';
import { GroceryAddForm } from './components/GroceryAddForm';
import { GroceryList } from './components/GroceryList';
import { useLocalStorage } from './custom_hooks/useLocalStorage';

const basicProductList = [{
  name: 'Carrot',
  status: 'have',
  priority: 5,
  id: '55522314',
}];

export function App() {
  const [products, setProducts] = useLocalStorage('products', basicProductList);
  const [productsForView, setProductsForView]
    = useLocalStorage('productsForView', products);
  const [currentFilterStatus, setCurrentFilterStatus] = useState('All');

  const deleteProduct = (productId) => {
    const filteredList = productsForView.filter(product => (
      product.id !== productId
    ));

    setProducts(filteredList);
    setProductsForView(filteredList);
  };

  const sortedByNameList = productsForView.sort((a, b) => (
    a.name.localeCompare(b.name)
  ));
  const sortedByPriorityList = sortedByNameList.sort((a, b) => (
    a.priority - b.priority
  ));

  useEffect(() => {
    if (currentFilterStatus === 'All') {
      setProductsForView(products);
    } else {
      const filteredList = products.filter(product => (
        product.status === currentFilterStatus
      ));

      setProductsForView(filteredList);
    }
  }, [currentFilterStatus, products]);

  const statusChange = (status, productId) => {
    const filteredProducts = productsForView.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          status,
        };
      }

      return product;
    });

    setProducts(filteredProducts);
    setProductsForView(filteredProducts);
  };

  return (
    <div className="grocery-list-app">
      <div className="grocery-list">
        <h1>Grocery list</h1>

        {!!productsForView && (
          <GroceryList
            setCurrentFilterStatus={setCurrentFilterStatus}
            products={sortedByPriorityList}
            deleteProduct={deleteProduct}
            statusChange={statusChange}
          />
        )}
      </div>

      <GroceryAddForm
        setProducts={setProducts}
        products={sortedByPriorityList}
      />
    </div>
  );
}
