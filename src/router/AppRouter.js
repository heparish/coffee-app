import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import AddCoffee from '../components/AddCoffee';
import CoffeeList from '../components/CoffeeList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditCoffee from '../components/EditCoffee';
import CoffeeContext from '../context/CoffeeContext';

const AppRouter = () => {
    const [coffees, setCoffee] = useLocalStorage('coffees', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
        <CoffeeContext.Provider value={{ coffees, setCoffee }}>
          <Routes>
            <Route path="/" element={<CoffeeList />} />
            <Route path="/add" element={<AddCoffee />} /> 
            <Route path="/edit/:id" element={<EditCoffee/>} />  
            <Route element={() => <Navigate to="/" />} />       
          </Routes>
          </CoffeeContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;