import React from 'react';
import './App.scss';
import { GroceryAddForm } from './components/GroceryAddForm';
import { GroceryList } from './components/GroceryList';
import { useLocalStorage } from './custom_hooks/useLocalStorage';

export function App() {
  const [products, setProducts] = useLocalStorage('products', [{
    name: 'Carrot',
    status: 'have',
    priority: 5,
    id: '55522314',
  }]);

  return (
    <div className="grocery-list-app">
      <div className="grocery-list">
        <h1>Grocery list</h1>
        {!!products && (
          <GroceryList products={products} />
        )}
      </div>

      <GroceryAddForm
        setProducts={setProducts}
        products={products}
      />
    </div>
  );
}
