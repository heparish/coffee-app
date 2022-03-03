import React from 'react';
import CoffeeForm from './CoffeeForm';

const AddCoffee = () => {
  const handleOnSubmit = (coffee) => {
    console.log(coffee);
  };

  return (
    <React.Fragment>
      <CoffeeForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddCoffee;