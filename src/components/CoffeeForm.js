import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const CoffeeForm = (props) => {
  const [Coffee, setCoffee ] = useState({
    coffee_name: props.coffee ? props.coffee.coffee_name : '',
    rating: props.coffee ? props.coffee.rating : '',
    // brand: props.coffee ? props.coffee.brand : '',
    // rating: props.coffee ? props.coffee.rating : '',
    // roastery: props.coffee ? props.coffee.roastery : '',
    flavor_notes: props.coffee ? props.coffee.flavor_notes : '',
    date: props.coffee ? props.coffee.date : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { coffee_name, rating, flavor_notes } = Coffee;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [coffee_name, rating, flavor_notes];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      // const Coffee = {
      //   id: uuidv4(),
      //   coffee_name,
      //   rating,
      //   flavor_notes,
      //   date: new Date()
      // };
      console.log(Coffee)
      props.handleOnSubmit(Coffee);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'rating':
        if (value === '' || parseInt(value) === +value) {
          setCoffee((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'roastery':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setCoffee((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setCoffee((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Coffee Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="coffeename"
            value={coffee_name}
            placeholder="Enter name of coffee"
            onChange={handleInputChange}
          />
        </Form.Group>
        {/* <Form.Group controlId="brand">
          <Form.Label>Coffee brand</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="brand"
            value={brand}
            placeholder="Enter name of brand"
            onChange={handleInputChange}
          />
        </Form.Group> */}
        <Form.Group controlId="rating">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="rating"
            value={rating}
            placeholder="Enter rating"
            onChange={handleInputChange}
          />
        </Form.Group>
        {/* <Form.Group controlId="roastery">
          <Form.Label>Coffee roastery</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="roastery"
            value={roastery}
            placeholder="Enter roastery of coffee"
            onChange={handleInputChange}
          />
        </Form.Group> */}
        <Form.Group controlId="flavornotes">
          <Form.Label>flavor Notes</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="flavornotes"
            value={flavor_notes}
            placeholder="Enter available rating"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CoffeeForm;