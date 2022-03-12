import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Coffee = ({
  id,
  coffeename,
  rating,
  flavornotes,
//   date,
  handleRemoveCoffee
}) => {
    const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem' }} className="cofee">
      <Card.Body>
        <Card.Title className="coffee-title">{coffeename}</Card.Title>
        <div className="coffee-details">
          <div>Name: {coffeename}</div>
          <div>Rating: {rating} </div>
          <div>flavor Notes: {flavornotes} </div>
          {/* <div>Date: {new Date(date).toDateString()}</div> */}
        </div>
        <Button variant="primary" onClick={() => navigate.push(`/edit/${id}`)}>Edit</Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveCoffee(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Coffee;