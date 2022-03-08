import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddCoffee from '../components/AddCoffee';
import CoffeeList from '../components/CoffeeList';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
    const [coffee, setCoffee] = useLocalStorage('coffee', []);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<CoffeeList />} />
            <Route
              path="/add" element={<AddCoffee />} 
            />          
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;