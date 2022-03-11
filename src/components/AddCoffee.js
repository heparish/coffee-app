import React, {useContext} from 'react';
import CoffeeForm from './CoffeeForm';
import CoffeeContext from '../context/CoffeeContext';

const AddCoffee = ({ history }) => {
  const { coffees, setCoffee } = useContext(CoffeeContext);

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