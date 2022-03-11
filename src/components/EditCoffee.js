import React, { useContext } from 'react';
import CoffeeForm from './CoffeeForm';
import { useParams } from 'react-router-dom';
import CoffeeContext from '../context/CoffeeContext';
import { useNavigate } from "react-router-dom";


function EditCoffee({ past }) {

    const { coffees, setCoffees } = useContext(CoffeeContext);
    const { id } = useParams();
    const coffeeToEdit = coffees.find((coffee) => coffee.id === id);

    const handleOnSubmit = (coffee) => {
        const filteredCoffees = coffees.filter((coffee) => coffee.id !== id);
        setCoffees([coffee, ...filteredCoffees]);
        past.navigate('/');
    };

    return (
        <div>
            <CoffeeForm coffee={coffeeToEdit} handleOnSubmit={handleOnSubmit} />
        </div>
    );
}

export default EditCoffee;