import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { FilterProvider } from './context/FilterContext';
function App() {
  return (
    <div className="">
      <FilterProvider>
        <HomePage />
      </FilterProvider>
    </div>
  );
}

export default App;
