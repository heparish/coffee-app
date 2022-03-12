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

    // console.log(coffee)
    fetch(
        'http://localhost:5000//write-journal',
        {
          method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
          body: JSON.stringify(coffee),
        }
    )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

    navigate("/");
  };

  return (
    <React.Fragment>
      <CoffeeForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddCoffee;