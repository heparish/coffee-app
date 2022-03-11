import React, { useContext } from 'react';
import _ from 'lodash';
import Coffee from './Coffee';
import CoffeeContext from '../context/CoffeeContext';

const CoffeeList = () => {
  const {coffees, setCoffee} = useContext(CoffeeContext);

  const handleRemoveCoffee = (id) => {
    setCoffee(coffees.filter((coffee) => coffee.id !== id));
  };
  return (
    <React.Fragment>
      <div className="coffee-list">
        {!_.isEmpty(coffees) ? (
          coffees.map((coffee) => (
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
