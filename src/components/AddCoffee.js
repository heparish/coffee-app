import React from 'react';
import CoffeeForm from './CoffeeForm';

const AddCoffee = ({ history, coffees, setCoffee}) => {
  const handleOnSubmit = (coffee) => {
    setCoffee([coffee, ...coffees]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <CoffeeForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddCoffee;