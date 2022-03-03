import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddCoffee from '../components/AddCoffee';
import CoffeeList from '../components/CoffeeList';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route component={CoffeeList} path="/" exact={true} />
            <Route component={AddCoffee} path="/add" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;