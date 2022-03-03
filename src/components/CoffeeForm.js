import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const CoffeeForm = (props) => {
  const [Coffee, ] = useState({
    coffeename: props.coffee ? props.coffee.coffeename : '',
    brand: props.coffee ? props.coffee.brand : '',
    region: props.coffee ? props.coffee.region : '',
    roastery: props.coffee ? props.coffee.roastery : '',
    flavournotes: props.coffee ? props.coffee.flavournotes : '',
    date: props.coffee ? props.coffee.date : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { coffeename, brand, roastery, region, flavournotes } = Coffee;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [coffeename, brand, roastery, region, flavournotes];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const Coffee = {
        id: uuidv4(),
        coffeename,
        brand,
        roastery,
        region,
        flavournotes,
        date: new Date()
      };
      props.handleOnSubmit(Coffee);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'region':
//         if (value === '' || parseInt(value) === +value) {
//           setCoffee((prevState) => ({
//             ...prevState,
//             [name]: value
//           }));
//         }
//         break;
//       case 'roastery':
//         if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
//           setCoffee((prevState) => ({
//             ...prevState,
//             [name]: value
//           }));
//         }
//         break;
//       default:
//         setCoffee((prevState) => ({
//           ...prevState,
//           [name]: value
//         }));
//     }
//   };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Coffee Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="Coffeename"
            value={coffeename}
            placeholder="Enter name of coffee"
            // onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="brand">
          <Form.Label>Coffee brand</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="brand"
            value={brand}
            placeholder="Enter name of brand"
            // onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="region">
          <Form.Label>Region</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="region"
            value={region}
            placeholder="Enter available region"
            // onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="roastery">
          <Form.Label>Coffee roastery</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="roastery"
            value={roastery}
            placeholder="Enter roastery of coffee"
            // onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="flavournotes">
          <Form.Label>Flavour Notes</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="flavournotes"
            value={flavournotes}
            placeholder="Enter available region"
            // onChange={handleInputChange}
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