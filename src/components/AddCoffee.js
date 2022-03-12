import React, {useContext} from 'react';
import CoffeeForm from './CoffeeForm';
import CoffeeContext from '../context/CoffeeContext';
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const AddCoffee = ({  }) => {
  let navigate=useNavigate();
  const { coffees, setCoffee } = useContext(CoffeeContext);
  const handleOnSubmit = (coffee) => {
    setCoffee([coffee, ...coffees]);
    // navigate.push('/');
    navigate("/");
  };

  return (
    <React.Fragment>
      <CoffeeForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddCoffee;