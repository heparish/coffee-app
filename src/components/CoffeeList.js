import React, {useContext, useEffect, useState} from 'react';
import _ from 'lodash';
import Coffee from './Coffee';
import CoffeeContext from '../context/CoffeeContext';

const CoffeeList = () => {
  const {coffees, setCoffee} = useContext(CoffeeContext);
  const [coffeess, setCoffeess] = useState([]);

  const handleRemoveCoffee = (id) => {
    setCoffee(coffees.filter((coffee) => coffee.id !== id));
    fetch(
      'http://localhost:5000/delete-entry/1',
      {
        method: 'POST',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          },
        // body: JSON.stringify(coffee),
      },
      )
        .then(res => res.json())
        .then(
            (result) => {
              handleRemoveCoffee(result);
            },
            (error) => {
              console.log(error);
            }
        )
  };

  useEffect(() => {
    fetch('http://localhost:5000/read-journal')
        .then(res => res.json())
        .then(
            (result) => {
              setCoffeess(result);
            },
            (error) => {
              console.log(error);
            }
        )
    
      }, []
  )

  return (
    <React.Fragment>
      <div className="coffee-list">
        {!_.isEmpty(coffeess) ? (
          coffeess.map((coffee) => (
            <Coffee key={coffee.id} {...coffee} handleRemoveCoffee={handleRemoveCoffee} />
          ))
        ) : (
          <p className="message">No coffees available. Please add some coffees.</p>
        )}
      </div>
    </React.Fragment>
  );
};


export default CoffeeList;
